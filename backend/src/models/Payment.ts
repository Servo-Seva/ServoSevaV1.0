import mongoose, { Schema, Document, Types } from "mongoose";

export interface IPayoutInfo {
  status?: "pending" | "initiated" | "completed" | "failed";
  razorpayPayoutId?: string;
  attemptedAt?: Date;
  failureReason?: string;
}

export interface IPayment extends Document {
  paymentId?: string;
  jobId: Types.ObjectId;
  customerId: Types.ObjectId;
  providerId?: Types.ObjectId;
  amountTotal: number;
  currency: string;
  commission: number;
  providerPayout: number;
  status: "initiated" | "success" | "failed" | "refunded";
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  payout?: IPayoutInfo;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

const PayoutSchema = new Schema<IPayoutInfo>({ status: String, razorpayPayoutId: String, attemptedAt: Date, failureReason: String }, { _id: false });

const PaymentSchema = new Schema<IPayment>(
  {
    paymentId: { type: String, index: true },
    jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true, index: true },
    customerId: { type: Schema.Types.ObjectId, ref: "User" },
    providerId: { type: Schema.Types.ObjectId, ref: "User" },
    amountTotal: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    commission: { type: Number, default: 0 },
    providerPayout: { type: Number, default: 0 },
    status: { type: String, enum: ["initiated", "success", "failed", "refunded"], default: "initiated", index: true },
    razorpayOrderId: String,
    razorpayPaymentId: String,
    razorpaySignature: String,
    payout: PayoutSchema,
    metadata: Schema.Types.Mixed
  },
  { timestamps: true }
);

PaymentSchema.index({ razorpayPaymentId: 1 }, { unique: false });

export default mongoose.models.Payment || mongoose.model<IPayment>("Payment", PaymentSchema);
