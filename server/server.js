import express from "express";
import morgan from "morgan";
import cors from "cors";
import chatRouter from "./routes/chat";
// import setupJWTStrategy from "./middlewares/auth.js";
// import passport from "passport";

export default function createServer() {
    const app = express();
    app.use(cors())
    app.use(express.json());

    app.use(morgan("tiny"));

    // setupJWTStrategy(passport);
    
    app.use("/chat",chatRouter);

    return app;
}