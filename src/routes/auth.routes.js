import { Router } from "express";
import authController from "../controllers/auth/index.js";
import { validateRegister } from "../validators/auth.validator.js";
import validate from "../middlewares/validate.middleware.js";

const authRouter = Router();

// register :-
authRouter.post(
  "/register",
  validateRegister(),
  validate,
  authController.registerUser,
);

// // login :-
// authRouter.post("/login");

// // refresh Token :-
// authRouter.post("/refresh-token");

// // logout :-
// authRouter.post("/logout");

// // logout all :-
// authRouter.post("/logout-all");

// // forgot password :-
// authRouter.post("/forgot-password");

// // reset password
// authRouter.post("/reset-password/:token");

// // verify-email :-
// authRouter.post("/verify-email");

// // resend-verification-eamil :-
// authRouter.post("/resend-verification-email");

// // change-password :-
// authRouter.patch("/change-password");

export default authRouter;
