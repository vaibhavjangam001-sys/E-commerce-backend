import ApiError from "../utils/ApiError.js"
import constant from "../constants/index.js";

const notFound = (req,res,next)  => {
    next (new ApiError(constant.HTTP_STATUS.NOT_FOUND,"Route not found"))
}

export default notFound;