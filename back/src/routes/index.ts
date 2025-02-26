import { Router, Request, Response } from "express";
import { createUsers } from "../controller/usercontroller";

const router: Router = Router();

router.post("/users", createUsers);
router.get("/users");
router.put("/users");
router.delete("/users");
export default router;
