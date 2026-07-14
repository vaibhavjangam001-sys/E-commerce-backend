import express from "express";
import healthRouter from "./routes/health.routes.js";
import notFound from "./middlewares/notFound.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";
import usersRouter from "./routes/user.routes.js";

const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes registration :-
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/user",usersRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
