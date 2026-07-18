import express from "express";
import cookieParser from "cookie-parser";
import routers from "./routes/index.js";
import middleware from "./middlewares/index.js";

// create app :- 
const app = express();

// Global Middlewares :- 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routers registration :-
app.use("/api/v1/health", routers.healthRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/address", addressRouter);
// app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/auth", routers.authRouter);
// app.use("/api/v1/brand", brandRouter);
// app.use("/api/v1/cart", cartRouter);
// app.use("/api/v1/category", categoryRouter);
// app.use("/api/v1/coupon", couponRouter);
// app.use("/api/v1/order", orderRouter);
// app.use("/api/v1/payment", paymentRouter);
// app.use("/api/v1/review", reviewRouter);
// app.use("/api/v1/upload", uploadRouter);
// app.use("/api/v1/wishlist", wishlistRouter);


// Not routes match middleware :-
app.use(middleware.notFound);

// Error middleware :- 
app.use(middleware.errorHandler);

export default app;