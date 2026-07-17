import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT is not defined in .env file");
}

const port = Number(process.env.PORT);

if (Number.isNaN(port)) {
  throw new Error("PORT must be a valid number");
}

if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV is not defined in .env file");
}

const validNodeEnvs = ["development", "production", "test"];

if (!validNodeEnvs.includes(process.env.NODE_ENV)) {
  throw new Error("NODE_ENV must be one of : development, production, test");
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env file");
}

if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error("ACCESS_TOKEN_SECRET is not defined in .env file");
}

if (!process.env.ACCESS_TOKEN_EXPIRY) {
  throw new Error("ACCESS_TOKEN_EXPIRY is not defined in .env file");
}

if (!process.env.REFRESH_TOKEN_SECRET) {
  throw new Error("REFRESH_TOKEN_SECRET is not defined in .env file");
}

if (!process.env.REFRESH_TOKEN_EXPIRY) {
  throw new Error("REFRESH_TOKEN_EXPIRY is not defined in .env file");
}

const env = Object.freeze({
  PORT: port,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
});

export default env;
