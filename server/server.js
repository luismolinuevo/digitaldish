import express from "express";
import morgan from "morgan";
import cors from "cors";
import AuthRouter from "./routes/auth.js";
import chatRouter from "./routes/chat.js";
import postRouter from "./routes/items.js"
import setupJWTStrategy from "./auth/index.js";
import passport from "passport";

export default function createServer() {
    const app = express();
    app.use(cors())
    app.use(express.json());

    app.use(morgan("tiny"));

    setupJWTStrategy(passport);
    app.use("/post", postRouter)
    app.use("/chat",chatRouter);
    app.use("/auth", AuthRouter);

    return app;
}