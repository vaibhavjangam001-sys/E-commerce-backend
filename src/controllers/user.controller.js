import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";

const registerUser = AsyncHandler((req, res) => {
  const { name, email, password } = req.body;

  const data = {
    name,
    email,
    password,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, "User registered successfully", data));
});

export { registerUser };
