import ApiResponse from "../utils/ApiResponse.js";

const checkHealth = (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, "Server is healthy", {
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    }),
  );
};

export { checkHealth };
