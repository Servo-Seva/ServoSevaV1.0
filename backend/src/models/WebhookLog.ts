import mongoose, { Schema, Document } from "mongoose";

export interface IWebhookLog extends Document {
  provider: string;
  eventId?: string;
  eventType?: string;
  rawPayload?: any;
  signatureValid?: boolean;
  attempts?: number;
  processed?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const WebhookLogSchema = new Schema<IWebhookLog>({
  provider: { type: String, required: true },
  eventId: { type: String, index: true },
  eventType: String,
  rawPayload: Schema.Types.Mixed,
  signatureValid: { type: Boolean, default: false },
  attempts: { type: Number, default: 0 },
  processed: { type: Boolean, default: false }
}, { timestamps: true });

WebhookLogSchema.index({ eventId: 1 }, { unique: true, sparse: true });

export default mongoose.models.WebhookLog || mongoose.model<IWebhookLog>("WebhookLog", WebhookLogSchema);
