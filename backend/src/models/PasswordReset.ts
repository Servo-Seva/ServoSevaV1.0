import mongoose, { Schema, Document } from "mongoose";

export interface IPasswordReset extends Document {
  userId: mongoose.Types.ObjectId;
  tokenHash: string;
  expiresAt: Date;
  used?: boolean;
  createdAt: Date;
}

const PasswordResetSchema = new Schema<IPasswordReset>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
  tokenHash: { type: String, required: true, index: true },
  expiresAt: { type: Date, required: true, index: true },
  used: { type: Boolean, default: false }
}, { timestamps: true });

// TTL removal if you want: create TTL index on expiresAt in migration or DB admin, e.g. expireAfterSeconds: 0

export default mongoose.models.PasswordReset || mongoose.model<IPasswordReset>("PasswordReset", PasswordResetSchema);
