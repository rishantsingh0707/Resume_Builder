import express from "express";
import {
  generateResume,
  calculateATS
} from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/generate", generateResume);
router.post("/ats", calculateATS);

export default router;