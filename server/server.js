import express from "express";
import http from "http";
import { Server } from "socket.io"
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.js";
import chatRouter from "./routes/chat.js";
import postRouter from "./routes/items.js";
import bidRouter from "./routes/bid.js"
import prisma from "./db/index.js";
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
    app.use("/auth", authRouter);
    app.use("/bid", bidRouter);


    //set up socket server
    const server = http.createServer(app);
    const io = new Server(server);

    io.on("connection", (socket) => {
        
        socket.on("joinRoom", (roomId) => {
            socket.join(roomId);
        })

        socket.on("sendMessage", async (message, roomId) => {
            const newMessage = await prisma.message.create({
                data: {
                    content: message.content,
                    senderUserName: message.senderUserName,
                    createAt: new Date(),
                    chat: {
                        connect: {id: roomId},
                    },
                }
            });

            io.to(roomId).emit("newMessage");
        });
    })

    return app;
}