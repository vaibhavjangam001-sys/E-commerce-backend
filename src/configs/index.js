import connectDB from "./database.config.js";
import cookieOptions from "./cookie.config.js";
import env from "./env.config.js";

const config = {
  connectDB,
  cookieOptions,
  env,
};

export default config;
