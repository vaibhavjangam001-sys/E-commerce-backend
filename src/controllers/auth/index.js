import registerUser from "./register.controller.js";
import loginUser from "./login.controller.js";
import refreshToken from "./refreshToken.controller.js";
import logoutUser from "./logout.controller.js";
import logoutAllDevice from "./logoutAllDevice.controller.js";

const authController = {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
  logoutAllDevice
};

export default authController;
