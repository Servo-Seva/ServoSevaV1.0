import mongoose, { Schema, Document } from "mongoose";

export interface INotification extends Document {
  toUserId?: mongoose.Types.ObjectId;
  type: "email" | "sms" | "push";
  templateId?: string;
  payload?: any;
  status: "queued" | "sent" | "failed";
  attempts?: number;
  lastAttemptAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema = new Schema<INotification>({
  toUserId: { type: Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["email", "sms", "push"], required: true },
  templateId: String,
  payload: Schema.Types.Mixed,
  status: { type: String, enum: ["queued", "sent", "failed"], default: "queued" },
  attempts: { type: Number, default: 0 },
  lastAttemptAt: Date
}, { timestamps: true });

NotificationSchema.index({ toUserId: 1, status: 1 });

export default mongoose.models.Notification || mongoose.model<INotification>("Notification", NotificationSchema);
