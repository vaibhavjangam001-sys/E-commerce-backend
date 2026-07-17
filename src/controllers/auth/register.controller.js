import AsyncHandler from "../../utils/AsyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ApiError from "../../utils/ApiError.js";
import constants from "../../constants/index.js";
import authService from "../../services/auth/index.js";

const registerUser = AsyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  return res
    .status(constants.HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        constants.HTTP_STATUS.CREATED,
        "User registered successfully.",
        user,
      ),
    );
});

export default registerUser;