import mongoose, { Schema, Document, Types } from "mongoose";

export interface IChat extends Document {
  jobId?: Types.ObjectId;
  participants: Types.ObjectId[];
  createdAt: Date;
}

export interface IMessage extends Document {
  chatId: Types.ObjectId;
  senderId: Types.ObjectId;
  text?: string;
  attachments?: { url: string; mime?: string }[];
  readBy?: Types.ObjectId[];
  createdAt: Date;
}

const ChatSchema = new Schema<IChat>({ jobId: { type: Schema.Types.ObjectId, ref: "Job" }, participants: [{ type: Schema.Types.ObjectId, ref: "User" }] }, { timestamps: true });
const MessageSchema = new Schema<IMessage>({ chatId: { type: Schema.Types.ObjectId, ref: "Chat", required: true }, senderId: { type: Schema.Types.ObjectId, ref: "User", required: true }, text: String, attachments: [{ url: String, mime: String }], readBy: [{ type: Schema.Types.ObjectId, ref: "User" }] }, { timestamps: true });

ChatSchema.index({ participants: 1 });
MessageSchema.index({ chatId: 1, createdAt: -1 });

export const Chat = mongoose.models.Chat || mongoose.model<IChat>("Chat", ChatSchema);
export const Message = mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);
