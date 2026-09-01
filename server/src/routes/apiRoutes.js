import express from "express";
import { getOriginalUrl, redirectToOriginalUrl } from "../controllers/apiController.js";

const router = express.Router({
    mergeParams: true
});

router.post("/", getOriginalUrl);
router.get("/", redirectToOriginalUrl);

export default router;