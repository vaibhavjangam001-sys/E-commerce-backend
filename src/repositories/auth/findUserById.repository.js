import User from "../../models/user.model.js";

const findUserById = async (userId) => {
    return await User.findById(userId);
}

export default findUserById;