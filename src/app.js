import express from "express";
import healthRouter from "./routes/health.routes.js";

const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes registration :-
app.use("/api/v1", healthRouter);

export default app;
