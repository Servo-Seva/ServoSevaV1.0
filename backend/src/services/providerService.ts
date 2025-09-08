import Provider from "../models/Provider";
import User from "../models/User";

export const apply = async (userId: string, payload: any) => {
  const existing = await Provider.findOne({ userId });
  if (existing) throw new Error("Already applied");
  const doc = await Provider.create({ userId, ...payload, kyc: { status: "pending", docs: payload.docs || [] } });
  // ensure User role is provider
  await User.findByIdAndUpdate(userId, { role: "provider" });
  return doc;
};

export const search = async (q: any) => {
  const { skill, page = 1, limit = 20 } = q;
  const filter: any = { status: "active" };
  if (skill) filter.skills = skill;
  const items = await Provider.find(filter).skip((+page - 1) * +limit).limit(+limit).lean();
  return items;
};

export const getById = async (id: string) => Provider.findById(id).populate("userId", "name email").lean();
export const update = async (userId: string, payload: any) => Provider.findOneAndUpdate({ userId }, payload, { new: true }).lean();
