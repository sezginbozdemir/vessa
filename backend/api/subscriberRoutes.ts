import express from "express";
import { createSubscriber } from "../controllers/subscriberController";
const router = express.Router();
router.post("/subscribers/new-subscriber", createSubscriber);

export default router;
