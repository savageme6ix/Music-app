import express from "express";
import { getAdmin } from "../controllers/adminController.js";
const router = express.Router();

router.get("/dashboard", getAdmin)

export default router;