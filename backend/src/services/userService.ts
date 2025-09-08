import User from "../models/User";
import Provider from "../models/Provider";

export const getById = async (id: string) => {
  const user = await User.findById(id).select("-passwordHash -refreshTokenFamilies").lean();
  return user;
};

export const update = async (id: string, patch: any) => {
  const updated = await User.findByIdAndUpdate(id, patch, { new: true }).select("-passwordHash -refreshTokenFamilies");
  return updated;
};

export const getMyProviders = async (customerId: string) => {
  const cust = await User.findById(customerId).populate({ path: "providersAssigned", select: "name email phone" }).lean();
  return (cust as any)?.providersAssigned || [];
};
