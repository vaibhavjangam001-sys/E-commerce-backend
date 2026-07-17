import ApiError from "../utils/ApiError";
import AsyncHandler from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import constants from "../constants/index.js";

const authenticate = AsyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(
      constants.HTTP_STATUS.UNAUTHORIZED,
      "Unauthorized! please login",
    );
  }

  let decoded;

  try {
    decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new ApiError(
        constants.HTTP_STATUS.UNAUTHORIZED,
        "Access token expired. Please login again",
      );
    }

    if (error.name === "JsonWebTokenError") {
      throw new ApiError(constants.HTTP_STATUS.UNAUTHORIZED, "Invalid access token");
    }

    throw error;
  }
  const user = await User.findById(decoded.id).select(
    "-password -refreshToken",
  );

  if (!user) {
    throw new ApiError(constants.HTTP_STATUS.UNAUTHORIZED, "User not found");
  }

  req.user = user;
  next();
});

export default authenticate;
