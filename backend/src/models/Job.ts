import mongoose, { Schema, Document, Types } from "mongoose";

export interface IJobPrice {
  currency: string;
  amount: number;
  breakdown?: any;
}

export interface IJobTimeline {
  at: Date;
  by?: Types.ObjectId;
  event: string;
  meta?: any;
}

export interface IJob extends Document {
  jobId: string;
  customerId: Types.ObjectId;
  providerId?: Types.ObjectId;
  serviceId: Types.ObjectId;
  status: "pending" | "assigned" | "in_progress" | "completed_pending_payment" | "paid" | "cancelled" | "disputed";
  scheduledAt?: Date;
  startAt?: Date;
  endAt?: Date;
  location?: { address?: string; city?: string; pincode?: string; geo?: { type: "Point"; coordinates: [number, number] } };
  price: IJobPrice;
  payment?: { status?: string; orderId?: string; paymentId?: string; captured?: boolean };
  commissionPercent: number;
  commissionAmount: number;
  providerAmount: number;
  timeline: IJobTimeline[];
  createdAt: Date;
  updatedAt: Date;
}

const TimelineSchema = new Schema<IJobTimeline>({ at: Date, by: { type: Schema.Types.ObjectId }, event: String, meta: Schema.Types.Mixed }, { _id: false });

const JobSchema = new Schema<IJob>(
  {
    jobId: { type: String, required: true, unique: true, index: true },
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    providerId: { type: Schema.Types.ObjectId, ref: "User", index: true },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    status: { type: String, enum: ["pending", "assigned", "in_progress", "completed_pending_payment", "paid", "cancelled", "disputed"], default: "pending", index: true },
    scheduledAt: Date,
    startAt: Date,
    endAt: Date,
    location: {
      address: String,
      city: String,
      pincode: String,
      geo: { type: { type: String, enum: ["Point"], default: "Point" }, coordinates: { type: [Number], index: "2dsphere" } }
    },
    price: {
      currency: { type: String, default: "INR" },
      amount: { type: Number, required: true },
      breakdown: Schema.Types.Mixed
    },
    payment: {
      status: String,
      orderId: String,
      paymentId: String,
      captured: Boolean
    },
    commissionPercent: { type: Number, default: Number(process.env.ADMIN_COMMISSION_PERCENT || 10) },
    commissionAmount: Number,
    providerAmount: Number,
    timeline: [TimelineSchema]
  },
  { timestamps: true }
);

// Indexes for common queries
JobSchema.index({ customerId: 1, createdAt: -1 });
JobSchema.index({ providerId: 1, scheduledAt: 1 });
JobSchema.index({ status: 1 });
JobSchema.index({ "location.geo": "2dsphere" });

export default mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);
