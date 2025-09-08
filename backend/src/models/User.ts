import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAddress {
  _id?: Types.ObjectId;
  label?: string;
  line1?: string;
  city?: string;
  state?: string;
  pincode?: string;
  geo?: { type: "Point"; coordinates: [number, number] };
}

export interface IRefreshFamily {
  familyId: string;
  revoked?: boolean;
  device?: string;
  createdAt?: Date;
}

export interface IUser extends Document {
  firstname: string;
  lastname?: string;
  email: string;
  phone?: string;
  passwordHash?: string | null;
  googleId?: string | null;
  authProvider?: "email" | "google";
  role: "customer" | "provider" | "admin";
  avatarUrl?: string;
  addresses?: IAddress[];
  providersAssigned?: Types.ObjectId[]; // list of provider userIds
  refreshTokenFamilies?: IRefreshFamily[];
  mfa?: { enabled: boolean; secretEnc?: string };
  createdAt: Date;
  updatedAt: Date;
}

const AddressSchema = new Schema<IAddress>(
  {
    label: String,
    line1: String,
    city: String,
    state: String,
    pincode: String,
    geo: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], index: "2dsphere" }
    }
  },
  { _id: true }
);

const RefreshFamilySchema = new Schema<IRefreshFamily>({
  familyId: { type: String, required: true },
  revoked: { type: Boolean, default: false },
  device: { type: String },
  createdAt: { type: Date, default: () => new Date() }
}, { _id: false });

const UserSchema = new Schema<IUser>(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, equired: true,trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    phone: { type: String, index: true, sparse: true },
    passwordHash: { type: String, select: false },
    googleId: { type: String, index: true, sparse: true },
    authProvider: { type: String, enum: ["email", "google"], default: "email" },
    role: { type: String, enum: ["customer", "provider", "admin"], default: "customer" },
    avatarUrl: String,
    addresses: [AddressSchema],
    providersAssigned: [{ type: Schema.Types.ObjectId, ref: "User" }],
    refreshTokenFamilies: [RefreshFamilySchema],
    mfa: {
      enabled: { type: Boolean, default: false },
      secretEnc: String
    }
  },
  { timestamps: true }
);

// Compound/index examples
UserSchema.index({ role: 1 });
UserSchema.index({ "addresses.geo": "2dsphere" });

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
