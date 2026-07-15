import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/index.js";

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Unauthorized");
    }

    if (!roles.includes(req.user.role)) {
      throw new ApiError(
        HTTP_STATUS.FORBIDDEN,
        "You do not have permission to access this resource.",
      );
    }

    next();
  };
};

export default authorize;
