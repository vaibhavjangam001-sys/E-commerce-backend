import User from "../../models/user.model.js";
import ApiError from "../../utils/ApiError.js";
import { HTTP_STATUS } from "../../constants/index.js";

const register = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(HTTP_STATUS.CONFLICT, "Email already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  return user;
};

export default register;
