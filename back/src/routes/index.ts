import { Router, Request, Response } from "express";
import { userRouter } from "./userRoutes";
import { turnRouter } from "./TurnsRoutes";

const router: Router = Router();

router.use("/users", userRouter);
router.use("/turns", turnRouter);

export default router;
