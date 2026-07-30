import constant from "../../constants/index.js";
import authService from "../../services/auth/index.js";
import AsyncHandler from "../../utils/AsyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import config from "../../configs/index.js";


const logoutAllDevice = AsyncHandler (async (req,res) => {

    await authService.logoutAllDevice(req);

    res
    .clearCookie("accessToken",config.cookieOptions)
    .clearCookie("refreshToken",config.cookieOptions)
    .status(constant.HTTP_STATUS.OK)
    .json(
       new ApiResponse(constant.HTTP_STATUS.OK, "Logged out all devices successfully", {}),
    )
})

export default logoutAllDevice;