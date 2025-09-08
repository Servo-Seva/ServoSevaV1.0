import Job from "../models/Job";
import Provider from "../models/Provider";
import User from "../models/User";
import { v4 as uuidv4 } from "uuid";

export const createJob = async (customerId: string, body: any) => {
  const { serviceId, scheduledAt, location, price } = body;
  // Find best provider: by skill + active + highest rating (simple)
  const providerDoc = await Provider.findOne({ skills: { $in: [serviceId] }, status: "active" }).sort({ "rating.avg": -1 }).lean() as { userId: string; servicesOffered?: { basePrice?: number }[] } | null;
  if (!providerDoc) throw new Error("No provider available");

  const providerId = providerDoc.userId;
  const commissionPercent = Number(process.env.ADMIN_COMMISSION_PERCENT || 10);
  const amount = Number(price?.amount ?? providerDoc.servicesOffered?.[0]?.basePrice ?? 0);
  const commissionAmount = Math.round((amount * commissionPercent) / 100);
  const providerAmount = amount - commissionAmount;

  const jobId = `JOB_${uuidv4().split("-")[0]}`;
  const job = await Job.create({
    jobId,
    customerId,
    providerId,
    serviceId,
    status: "assigned",
    scheduledAt,
    location,
    price: { currency: "INR", amount },
    commissionPercent,
    commissionAmount,
    providerAmount,
    timeline: [{ at: new Date(), by: customerId, event: "created" }]
  });

  // add provider to customer's assigned list
  await User.findByIdAndUpdate(customerId, { $addToSet: { providersAssigned: providerId } });

  return job;
};

export const getMyJobs = async (userId: string, role: string) => {
  if (role === "customer") return Job.find({ customerId: userId }).populate("providerId serviceId").sort({ createdAt: -1 }).lean();
  if (role === "provider") return Job.find({ providerId: userId }).populate("customerId serviceId").sort({ createdAt: -1 }).lean();
  return [];
};

export const getJob = async (id: string, user: any) => {
  const job = await Job.findById(id).lean();
  if (!job) throw new Error("Job not found");
  // enforce access
  if (Array.isArray(job)) throw new Error("Unexpected array result for job");
  if (String(job.customerId) !== String(user._id) && String(job.providerId) !== String(user._id) && user.role !== "admin") throw new Error("Forbidden");
  return job;
};

export const acceptJob = async (jobId: string, providerUserId: string) => {
  const job = await Job.findById(jobId);
  if (!job) throw new Error("Not found");
  if (String(job.providerId) !== String(providerUserId)) throw new Error("Not assigned to you");
  job.status = "in_progress";
  job.timeline.push({ at: new Date(), by: providerUserId, event: "accepted" });
  await job.save();
  return job;
};

export const updateStatus = async (jobId: string, status: string, user: any) => {
  const job = await Job.findById(jobId);
  if (!job) throw new Error("Not found");
  // rules
  if (status === "completed_pending_payment") {
    if (String(user._id) !== String(job.providerId)) throw new Error("Only provider can mark completed");
    job.status = status;
    job.timeline.push({ at: new Date(), by: user._id, event: "completed" });
    await job.save();
    return job;
  }
  if (status === "cancelled") {
    if (String(user._id) !== String(job.customerId) && String(user._id) !== String(job.providerId) && user.role !== "admin")
      throw new Error("Not allowed");
    job.status = "cancelled";
    job.timeline.push({ at: new Date(), by: user._id, event: "cancelled" });
    await job.save();
    return job;
  }
  // fallback
  job.status = status;
  job.timeline.push({ at: new Date(), event: `status:${status}`, by: user._id });
  await job.save();
  return job;
};
