import { Router } from "express";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import providerRoutes from "./providerRoutes";
import serviceRoutes from "./serviceRoutes";
import jobRoutes from "./jobRoutes";
import paymentRoutes from "./paymentRoutes";
import webhookRoutes from "./webhookRoutes";
import reviewRoutes from "./reviewRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/providers", providerRoutes);
router.use("/services", serviceRoutes);
router.use("/jobs", jobRoutes);
router.use("/payments", paymentRoutes);
router.use("/webhooks", webhookRoutes); // webhooks should be before json parser alternative if using raw
router.use("/reviews", reviewRoutes);

export default router;
