import register from "./register.service.js"
import generateAccessAndRefreshToknes from "./generateAccessAndRefreshTokens.service.js";
import login from "./login.service.js";

const authService = {
    register,
    generateAccessAndRefreshToknes,
    login,
}

export default authService;