import app from "./app.js";
import config from "./configs/index.js"

const startServer = async () => {
  try {
    await config.connectDB();

    const PORT = config.env.PORT;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
