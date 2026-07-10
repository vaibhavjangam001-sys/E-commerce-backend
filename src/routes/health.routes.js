import { Router } from "express";
import { checkHealth } from "../controllers/health.controller.js";

const healthRouter = Router();

healthRouter.get("/health",checkHealth);

export default healthRouter;