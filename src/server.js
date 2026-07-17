import app from "./app.js";
import configs from "./configs/index.js"

const startServer = async () => {
  try {
    await configs.connectDB();

    const PORT = configs.env.PORT;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
