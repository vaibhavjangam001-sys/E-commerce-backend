import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js";
import constant from "../constants/index.js";

const validate = (req,res,next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
       return next(new ApiError(constant.HTTP_STATUS.BAD_REQUEST,"Validation failed",errors.array()));
    }

    next();
}

export default validate;