import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js";
import constants from "../constants/index.js";

const validate = (req,res,next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
       return next(new ApiError(constants.HTTP_STATUS.BAD_REQUEST,"Validation failed",errors.array()));
    }

    next();
}

export default validate;