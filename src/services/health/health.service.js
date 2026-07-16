const getServerHealthData = () => {
  return {
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  };
};


export default getServerHealthData;