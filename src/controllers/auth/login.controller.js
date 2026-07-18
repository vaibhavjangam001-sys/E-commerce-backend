import AsyncHandler from "../../utils/AsyncHandler.js";
import authService from "../../services/auth/index.js";
import constant from "../../constants/index.js";
import config from "../../configs/index.js";
import ApiResponse from "../../utils/ApiResponse.js";

const loginUser = AsyncHandler(async (req, res) => {
  const { accessToken, refreshToken, user } = await authService.login(req.body);

  return res
    .status(constant.HTTP_STATUS.OK)
    .cookie("accessToken", accessToken, config.cookieOptions)
    .cookie("refreshToken", refreshToken, config.cookieOptions)
    .json(
      new ApiResponse(
        constant.HTTP_STATUS.OK,
        "User logged successfully",
        user,
      ),
    );
});

export default loginUser;
