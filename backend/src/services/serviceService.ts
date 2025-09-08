import Service from "../models/Service";
export const list = async () => Service.find().lean();
export const create = async (b: any) => Service.create(b);
export const update = async (id: string, patch: any) => Service.findByIdAndUpdate(id, patch, { new: true });
export const remove = async (id: string) => Service.findByIdAndDelete(id);
