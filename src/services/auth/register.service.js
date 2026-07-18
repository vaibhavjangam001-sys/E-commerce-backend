import ApiError from "../../utils/ApiError.js";
import constant from "../../constants/index.js";
import authRepository from "../../repositories/auth/index.js";

const register = async ({ name, email, password }) => {
  const existingUser = await authRepository.findUserByEmail(email);

  if (existingUser) {
    throw new ApiError(constant.HTTP_STATUS.CONFLICT, "Email already exists");
  }

  const user = await authRepository.createUser({ name, email, password });
  return user;
};

export default register;
