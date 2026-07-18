import constant from "../../constants/index.js";
import authRepository from "../../repositories/auth/index.js";
import ApiError from "../../utils/ApiError.js";
import generateAccessAndRefreshToknes from "./generateAccessAndRefreshTokens.service.js";

const login = async ({ email, password }) => {
  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    throw new ApiError(
      constant.HTTP_STATUS.BAD_REQUEST,
      "Invalid email or Password.",
    );
  }

  const isCorrectPassword = await user.comparePassword(password);

  if (!isCorrectPassword) {
    throw new ApiError(
      constant.HTTP_STATUS.BAD_REQUEST,
      "Invalid email or password.",
    );
  }

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshToknes(user._id);

  return { accessToken, refreshToken};
};

export default login;
