import constant from "../../constants/index.js";
import ApiError from "../../utils/ApiError.js";
import authRepository from "../../repositories/auth/index.js";

const generateAccessAndRefreshToknes = async (userId) => {
  const user = await authRepository.findUserById(userId);

  if (!user) {
    throw new ApiError(constant.HTTP_STATUS.NOT_FOUND, "User not found.");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  await authRepository.addRefreshToken({ user, refreshToken });

  const newUser = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return {
    accessToken,
    refreshToken,
    newUser,
  };
};

export default generateAccessAndRefreshToknes;
