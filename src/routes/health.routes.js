import { Router } from "express";
import { getServerHealth } from "../controllers/health/index.js";

const healthRouter = Router();

healthRouter.get("/", getServerHealth);

export default healthRouter;
