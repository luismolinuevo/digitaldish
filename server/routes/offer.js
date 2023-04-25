import express from "express";
import prisma from "../db/index.js";

// export default function setupChatRouter() {
    const router = express.Router();

    //create a chatroom
    router.post("/createroom/:postId", async (req, res) => {
        const postId = req.params.postId;
        console.log("test")
        try {
            console.log("here")

            const { userId, userTwoId } = req.body;
            const chatroom = await prisma.offer.create({
                data: {
                    postId: Number(postId), 
                    users: {   //this will link user one     
                        connect: [
                            { id: Number(userId) }, 
                            { id: Number(userTwoId) }
                        ]
                    },
                    

                },
                include: { users: true },
            });

            res.status(201).json({
                success: true,
                chatroom,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server Error" })
        }

    });

    //get all chats for a user
    router.get("/userchats", async (req, res) => {

        try {
            const chatroom = await prisma.offer.findMany({
                where: {
                    user: {  //was users
                        some: {
                            id: parseInt(req.user.id)
                        },
                    },
                },
                include: {
                    messages: {
                        orderBy: {
                            createdAt: "asc",
                        },
                    },
                },
                users: true,


            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server Error" })
        }
    });

    //get chatroom by chatroom id
    router.get("/:id", async (req, res) => {
        const chatId = req.params.id;

        const getChat = await prisma.offer.findFirst({
            where: {
                id: Number(id)
            },
            include: {
                messages: true
            }
        });

        res.status(200).json({
            success: true,
            getChat
        });
    });

    export default router;