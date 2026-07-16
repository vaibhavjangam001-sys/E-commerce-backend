import ApiResponse from "../../utils/ApiResponse.js";
import { getServerHealthData } from "../../services/health/index.js";
import { HTTP_STATUS } from "../../constants/httpStatus.constant.js";

const getServerHealth = (req, res) => {
  const healthData = getServerHealthData();

  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        "Server is healthy",
        healthData
    )
  );
};

export default getServerHealth;
