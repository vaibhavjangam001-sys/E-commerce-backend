import jwt from "jsonwebtoken";
import config from "../../configs/index.js";
import ApiError from "../../utils/ApiError.js";
import constant from "../../constants/index.js";
import authRepository from "../../repositories/auth/index.js";

const logoutUser = async (req) => {
  const incomingRefreshToken = req.cookies?.refreshToken;

  if (!incomingRefreshToken) {
    return;
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(
      incomingRefreshToken,
      config.env.REFRESH_TOKEN_SECRET,
    );
  } catch (error) {
    return;
  }

  const user = await authRepository.findUserById(decodedToken.id);

  if (!user) {
    return;
  }

  await authRepository.removeRefreshToken({
    user,
    refreshToken: incomingRefreshToken,
  });
};

export default logoutUser;
