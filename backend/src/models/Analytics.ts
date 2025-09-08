import mongoose, { Schema, Document } from "mongoose";

export interface IAnalytics extends Document {
  key: string;
  value: number;
  meta?: any;
  updatedAt: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  key: { type: String, required: true, unique: true },
  value: { type: Number, default: 0 },
  meta: Schema.Types.Mixed
}, { timestamps: { createdAt: false, updatedAt: true } });

export default mongoose.models.Analytics || mongoose.model<IAnalytics>("Analytics", AnalyticsSchema);
