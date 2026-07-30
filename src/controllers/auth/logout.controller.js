import constant from "../../constants/index.js";
import authService from "../../services/auth/index.js";
import AsyncHandler from "../../utils/AsyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import config from "../../configs/index.js";

const logoutUser = AsyncHandler(async (req, res) => {
  await authService.logoutUser(req);

  res
    .clearCookie("accessToken", config.cookieOptions)
    .clearCookie("refreshToken", config.cookieOptions)
    .status(constant.HTTP_STATUS.OK)
    .json(
      new ApiResponse(constant.HTTP_STATUS.OK, "Logged out successfully", {}),
    );
});

export default logoutUser;