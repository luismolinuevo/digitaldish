import express from "express";
import http from "http";
import {Server}  from "socket.io"
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.js";
import chatRouter from "./routes/chat.js";
import postRouter from "./routes/items.js";
import bidRouter from "./routes/bid.js"
import prisma from "./db/index.js";
import setupJWTStrategy from "./auth/index.js";
import passport from "passport";
import followersRouter from "./routes/follow.js"
import offerRouter from "./routes/offer.js";
import prevorderRouter from "./routes/prevorders.js"
import axios from "axios";

export default function createServer() {
    const app = express();
    
    // app.use(cors())
    app.use(cors({ origin: "*"}));
;
    app.use(express.json());

    app.use(morgan("tiny"));

    setupJWTStrategy(passport);
    app.use("/post", postRouter)
    app.use("/chat",chatRouter);
    app.use("/auth", authRouter);
    app.use("/followers", followersRouter)
    app.use("/bid", bidRouter)
    app.use("/offer",offerRouter);
    app.use("/prevorder", prevorderRouter)

    //set up socket server
    const server = http.createServer(app);

    
    // const io = new Server(server);
    const io = new Server(server, {
        cors: {
          origin: "*",
          methods: ["GET", "POST", "PUT", "DELETE"],
          credentials: true,
        },
      });


    
    io.on("connection", (socket) => {
        
        socket.on("joinRoom", (roomId) => {
            socket.join(roomId);
        })

        socket.on("sendMessage", async (message, roomId) => {
            console.log("in")
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

        socket.on("joinOfferRoom", (roomId) => {
            socket.join(roomId);
            console.log("A user has joined this room")
        })

        socket.on("sendOfferMessage", async (message, roomId) => {
            console.log("in")
            const newMessage = await prisma.offerMessage.create({
                data: {
                    content: message.content,
                    user: {
                        connect: { id: Number(message.userId) }
                    },
                    createAt: new Date(),
                    offer: {
                        connect: {id: roomId},
                    },
                    // user: {
                    //     connect: {id: Number(message.userId)}
                    // }
                }
            });

            io.to(roomId).emit("newMessage");
        });




    })

    // server.listen(8080)

    return server;
}