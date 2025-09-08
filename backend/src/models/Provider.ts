import mongoose, { Schema, Document, Types } from "mongoose";

export interface IServiceOffered {
  serviceId: Types.ObjectId;
  basePrice?: number;
  pricingModel?: "fixed" | "hourly" | "quote";
  minCharge?: number;
}

export interface IKycDoc {
  type: string;
  url: string;
  hash?: string;
}

export interface IBankInfo {
  accountHolderMask?: string;
  accountNumberMask?: string;
  ifscMask?: string;
  encryptedPayload?: string; // encrypted full bank data if needed
  providerAccountId?: string; // Razorpay sub-merchant id, optional
}

export interface IProvider extends Document {
  userId: Types.ObjectId;
  businessName?: string;
  skills: string[];
  servicesOffered: IServiceOffered[];
  serviceAreaGeo?: any;
  availability?: any;
  kyc: { status: "pending" | "approved" | "rejected"; docs: IKycDoc[]; verifiedAt?: Date };
  bank?: IBankInfo;
  rating?: { avg: number; count: number };
  totalJobs?: number;
  status?: "active" | "suspended" | "offline";
  createdAt: Date;
  updatedAt: Date;
}

const ServiceOfferedSchema = new Schema<IServiceOffered>({
  serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  basePrice: Number,
  pricingModel: { type: String, enum: ["fixed", "hourly", "quote"], default: "fixed" },
  minCharge: Number
}, { _id: false });

const KycDocSchema = new Schema<IKycDoc>({ type: String, url: String, hash: String }, { _id: false });

const BankSchema = new Schema<IBankInfo>({
  accountHolderMask: String,
  accountNumberMask: String,
  ifscMask: String,
  encryptedPayload: String,
  providerAccountId: String
}, { _id: false });

const ProviderSchema = new Schema<IProvider>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    businessName: String,
    skills: [String],
    servicesOffered: [ServiceOfferedSchema],
    serviceAreaGeo: { type: Schema.Types.Mixed }, // GeoJSON polygon / multipolygon if used
    availability: { type: Schema.Types.Mixed },
    kyc: { status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }, docs: [KycDocSchema], verifiedAt: Date },
    bank: BankSchema,
    rating: { avg: { type: Number, default: 0 }, count: { type: Number, default: 0 } },
    totalJobs: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "suspended", "offline"], default: "active" }
  },
  { timestamps: true }
);

ProviderSchema.index({ userId: 1 });
ProviderSchema.index({ skills: 1 });
ProviderSchema.index({ "serviceAreaGeo": "2dsphere" });

export default mongoose.models.Provider || mongoose.model<IProvider>("Provider", ProviderSchema);
