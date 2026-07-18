import addRefreshToken from "./addRefreshToken.repository.js";
import createUser from "./createUser.repository.js";
import findUserByEmail from "./findUserByEmail.repository.js";
import findUserById from "./findUserById.repository.js";

const authRepository = {
  createUser,
  findUserByEmail,
  findUserById,
  addRefreshToken,
};

export default authRepository;
