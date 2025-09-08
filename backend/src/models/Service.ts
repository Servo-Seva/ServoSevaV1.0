import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  name: string;
  slug: string;
  category?: string;
  description?: string;
  basePrice?: number;
  pricingModel: "fixed" | "hourly" | "quote";
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: String,
    description: String,
    basePrice: Number,
    pricingModel: { type: String, enum: ["fixed", "hourly", "quote"], default: "fixed" },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);
