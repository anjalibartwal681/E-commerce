import express from "express";
import { regiterController } from "../controllers/user.controller.js";

const router = express.Router()

router.post('/register', regiterController)

export default router