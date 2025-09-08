import mongoose, { Schema, Document } from "mongoose";

export interface IAuditLog extends Document {
  actorId?: mongoose.Types.ObjectId;
  actorRole?: string;
  action: string;
  resourceType?: string;
  resourceId?: any;
  diff?: any;
  ip?: string;
  uaHash?: string;
  createdAt: Date;
}

const AuditLogSchema = new Schema<IAuditLog>({
  actorId: { type: Schema.Types.ObjectId, ref: "User" },
  actorRole: String,
  action: { type: String, required: true },
  resourceType: String,
  resourceId: Schema.Types.Mixed,
  diff: Schema.Types.Mixed,
  ip: String,
  uaHash: String
}, { timestamps: { createdAt: true, updatedAt: false } });

AuditLogSchema.index({ resourceType: 1, resourceId: 1, createdAt: -1 });

export default mongoose.models.AuditLog || mongoose.model<IAuditLog>("AuditLog", AuditLogSchema);
