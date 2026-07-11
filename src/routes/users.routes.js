import { Router } from "express";
import { registerUser } from "../controllers/users.controller.js";
import { validateRegister } from "../validators/auth.validator.js";
import validate from "../middlewares/validate.middleware.js";


const usersRouter = Router();

usersRouter.post("/",validateRegister(),validate,registerUser);

export default usersRouter;