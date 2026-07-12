import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT is not defined in .env file");
}

if (!process.env.NODE_ENV) {
  throw new Error("NODE_ENV is not defined in .env file");
}

if(!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env file");
}

const port = Number(process.env.PORT);

if (Number.isNaN(port)) {
  throw new Error("PORT must be a valid number");
}

const validNodeEnvs = ["development", "production", "test"];

if (!validNodeEnvs.includes(process.env.NODE_ENV)) {
  throw new Error("NODE_ENV must be one of : development, production, test");
}

const env = Object.freeze({
  PORT: port,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI : process.env.MONGODB_URI
});

export default env;
