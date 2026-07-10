import dotenv from "dotenv";
dotenv.config();


if(!process.env.PORT) {
    throw new Error("PORT is not defined in .env file");
}

if(!process.env.NODE_ENV) {
    throw new Error("NODE_ENV is not defined in .env file");
}

const env = {
    PORT : process.env.PORT,
    NODE_ENV : process.env.NODE_ENV
}

export default env;