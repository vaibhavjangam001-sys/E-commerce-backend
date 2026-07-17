import ApiResponse from "../../utils/ApiResponse.js";
import healthService from "../../services/health/index.js";
import constants from "../../constants/index.js";

const getServerHealth = (req, res) => {
  const healthData = healthService.getServerHealthData();

  return res
    .status(constants.HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        constants.HTTP_STATUS.OK,
        "Server is healthy",
        healthData
    )
  );
};

export default getServerHealth;
