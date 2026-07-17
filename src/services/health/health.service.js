import configs from "../../configs/index.js"

const getServerHealthData = () => {
  return {
    uptime: process.uptime(),
    environment: configs.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  };
};


export default getServerHealthData;