import { Response } from "express";
export const ok = (res: Response, data: any = null, message = "OK") => res.json({ success: true, message, data });
export const err = (res: Response, message = "Error", code = 500) => res.status(code).json({ success: false, message });
