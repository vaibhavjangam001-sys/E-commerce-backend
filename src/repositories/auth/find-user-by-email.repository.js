import User from "../../models/user.model.js";

const findUserByEmail = async (email) => {
    return await User.findOne({email});
}

export default findUserByEmail;