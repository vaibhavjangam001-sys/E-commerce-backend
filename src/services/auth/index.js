import register from "./register.service.js";
import generateAccessAndRefreshToknes from "./generateAccessAndRefreshTokens.service.js";
import login from "./login.service.js";
import refreshToken from "./refreshToken.service.js";
import logoutUser from "./logout.service.js";
import logoutAllDevice from "./logoutAllDevice.service.js";

const authService = {
  register,
  generateAccessAndRefreshToknes,
  login,
  refreshToken,
  logoutUser,
  logoutAllDevice
};

export default authService;
