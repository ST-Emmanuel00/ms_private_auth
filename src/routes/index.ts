import { Router } from "express";
import authRouter from "./access/auth.router";
import usersRoutes from "./users/index.router";
import exploreRoutes from "./explorer/explorer.routes";
import { authValidator, checkPermission } from "../middlewares";

const router = Router();
// Auth or log in
router.use("/auth", authRouter);

router.use("/explorer", authValidator, exploreRoutes);

// User module
router.use("/",authValidator, checkPermission, usersRoutes);


export default router;
