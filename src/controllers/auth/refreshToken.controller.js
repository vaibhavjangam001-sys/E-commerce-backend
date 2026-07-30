import asyncHandler from "../../utils/AsyncHandler.js";
import constant from "../../constants/index.js";
import config from "../../configs/index.js";
import authService from "../../services/auth/index.js";
import ApiResponse from "../../utils/ApiResponse.js";

const refreshToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body.refreshToken;
    
  const tokens = await authService.refreshToken(incomingRefreshToken);

  return res
    .status(constant.HTTP_STATUS.OK)
    .cookie("accessToken", tokens.accessToken, config.cookieOptions)
    .cookie("refreshToken", tokens.refreshToken, config.cookieOptions)
    .json(
      new ApiResponse(
        constant.HTTP_STATUS.OK,
        "Access token refreshed successfully.",
      ),
    );
});

export default refreshToken;
