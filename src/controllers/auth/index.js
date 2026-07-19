import registerUser from "./register.controller.js";
import loginUser from "./login.controller.js";
import refreshToken from "./refreshToken.controller.js";

const authController = {
  registerUser,
  loginUser,
  refreshToken,
};

export default authController;
