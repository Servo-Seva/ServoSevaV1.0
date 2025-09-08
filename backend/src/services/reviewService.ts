import Review from "../models/Review";
import Provider from "../models/Provider";

export const create = async (userId: string, { jobId, providerId, rating, comment }: any) => {
  // ensure job belongs to user and is completed/payed in production
  const rev = await Review.create({ jobId, reviewerId: userId, revieweeId: providerId, rating, comment });
  // update provider aggregate (simple approach)
  const provider = await Provider.findOne({ userId: providerId });
  if (provider) {
    const newCount = (provider.rating?.count || 0) + 1;
    const newAvg = ((provider.rating?.avg || 0) * (newCount - 1) + rating) / newCount;
    provider.rating = { avg: newAvg, count: newCount };
    await provider.save();
  }
  return rev;
};

export const getByProvider = async (providerId: string) => Review.find({ revieweeId: providerId }).sort({ createdAt: -1 }).lean();
