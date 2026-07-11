import { Router } from "express";
import { checkHealth } from "../controllers/health.controller.js";
import AsyncHandler from "../utils/AsyncHandler.js";

const healthRouter = Router();

healthRouter.get("/",AsyncHandler(checkHealth));

export default healthRouter;