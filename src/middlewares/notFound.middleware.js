import ApiError from "../utils/ApiError.js"
import constants from "../constants/index.js";

const notFound = (req,res,next)  => {
    next (new ApiError(constants.HTTP_STATUS.NOT_FOUND,"Route not found"))
}

export default notFound;