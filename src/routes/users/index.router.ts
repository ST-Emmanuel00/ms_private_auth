import { Router } from "express";
import userRoutes from "./user.routes";
import rolesRoutes from "./roles.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/roles", rolesRoutes);

export default router;
