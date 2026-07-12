import app from "./app.js";
import env from "./config/env.config.js";
import connectDB from "./config/database.config.js";

const startServer = async () => {
  try {
    await connectDB();

    const PORT = env.PORT;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
