import createUser from "./create-user.repository.js";
import findUserByEmail from "./find-user-by-email.repository.js";

const authRepository = {
  createUser,
  findUserByEmail,
};

export default authRepository;
