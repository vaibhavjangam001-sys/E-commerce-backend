import User from "../../models/user.model.js";

const createUser = async (userData) => {
    return await User.create(userData);
};

export default createUser;