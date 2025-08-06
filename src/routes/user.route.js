import express from "express";
import { addRandomSecret, getASecret } from "../controller/user.controller.js";

const router = express.Router();

router.post("/secret", addRandomSecret);
router.get("/secret", getASecret);

export default router;
