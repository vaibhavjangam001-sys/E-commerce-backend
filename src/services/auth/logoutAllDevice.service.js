import authRepository from "../../repositories/auth/index.js";

const logoutAllDevice = async (req) => {

    const user = req.user;

    await authRepository.removeAllRefreshTokens(user);
}

export default logoutAllDevice;