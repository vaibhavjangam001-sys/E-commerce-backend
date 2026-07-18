import config from "../../configs/index.js"

const getServerHealthData = () => {
  return {
    uptime: process.uptime(),
    environment: config.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  };
};


export default getServerHealthData;