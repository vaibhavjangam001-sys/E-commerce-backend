import User from "../models/user.model.js"
import ApiError from "../utils/ApiError.js"


export const isEmailAvailable = async (email) => {

    const user = await User.findOne({email});

    if(user) {
        throw new Error("Eamil already exists.");
    }

    return true;
}