import express from "express";
import { getOriginalUrl, redirectToOriginalUrl } from "../controllers/apiController.js";

const router = express.Router();

router.post("/", getOriginalUrl);
router.get("/:shortCode", redirectToOriginalUrl);

export default router;