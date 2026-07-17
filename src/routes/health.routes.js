import { Router } from "express";
import healthController from "../controllers/health/index.js";

const healthRouter = Router();

healthRouter.get("/", healthController.getServerHealth);

export default healthRouter;
