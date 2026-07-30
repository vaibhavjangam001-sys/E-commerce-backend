import { Router } from "express";
import authController from "../controllers/auth/index.js";
import {
  validateLogin,
  validateRegister,
} from "../validators/auth.validator.js";
import middleware from "../middlewares/index.js";

const authRouter = Router();

// register :-
authRouter.post(
  "/register",
  validateRegister(),
  middleware.validate,
  authController.registerUser,
);

// login :-
authRouter.post(
  "/login",
  validateLogin(),
  middleware.validate,
  authController.loginUser,
);

// refresh Token :-
authRouter.post("/refresh-token", authController.refreshToken);

// logout :-
authRouter.post("/logout", authController.logoutUser);

// logout all :-
authRouter.post(
  "/logout-all",
  middleware.authenticate,
  authController.logoutAllDevice,
);

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
