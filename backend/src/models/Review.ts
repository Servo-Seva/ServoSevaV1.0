import mongoose, { Schema, Document, Types } from "mongoose";

export interface IReview extends Document {
  jobId: Types.ObjectId;
  reviewerId: Types.ObjectId;
  revieweeId: Types.ObjectId;
  rating: number;
  comment?: string;
  createdAt: Date;
}

const ReviewSchema = new Schema<IReview>({
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true, index: true },
  reviewerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  revieweeId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: String
}, { timestamps: true });

ReviewSchema.index({ revieweeId: 1, rating: -1 });

export default mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
