import config from "../../configs/index.js";
import constant from "../../constants/index.js";
import authRepository from "../../repositories/auth/index.js";
import ApiError from "../../utils/ApiError.js";
import jwt from "jsonwebtoken";
import generateAccessAndRefreshToknes from "./generateAccessAndRefreshTokens.service.js";

const refreshToken = async (incomingRefreshToken) => {
  if (!incomingRefreshToken) {
    throw new ApiError(
      constant.HTTP_STATUS.UNAUTHORIZED,
      "Refresh Token is required",
    );
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(
      incomingRefreshToken,
      config.env.REFRESH_TOKEN_SECRET,
    );
  } catch (error) {
    throw new ApiError(
      constant.HTTP_STATUS.UNAUTHORIZED,
      "Invalid or expired refresh token.",
    );
  }

  const user = await authRepository.findUserById(decodedToken.id);

  if (!user) {
    throw new ApiError(constant.HTTP_STATUS.NOT_FOUND, "User not found");
  }

  const tokenExists = user.refreshTokens.includes(incomingRefreshToken);

  if (!tokenExists) {
    throw new ApiError(
      constant.HTTP_STATUS.UNAUTHORIZED,
      "Invalid refresh token",
    );
  }

  await authRepository.removeRefreshToken({
    user,
    refreshToken : incomingRefreshToken,
  });

  const tokens = await generateAccessAndRefreshToknes(user._id);

  return tokens;
};

export default refreshToken;
