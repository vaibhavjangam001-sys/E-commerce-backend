import addRefreshToken from "./addRefreshToken.repository.js";
import createUser from "./createUser.repository.js";
import findUserByEmail from "./findUserByEmail.repository.js";
import findUserById from "./findUserById.repository.js";
import removeRefreshToken from "./removeRefreshToken.repository.js";

const authRepository = {
  createUser,
  findUserByEmail,
  findUserById,
  addRefreshToken,
  removeRefreshToken,
};

export default authRepository;
