import authenticate from "./authenticate.middleware.js";
import authorize from "./authorize.middleware.js";
import errorHandler from "./error.middleware.js";
import notFound from "./notFound.middleware.js";
import validate from "./validate.middleware.js";

const middleware = {
    authenticate,
    authorize,
    errorHandler,
    notFound,
    validate
}

export default middleware;