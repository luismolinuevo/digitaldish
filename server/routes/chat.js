import express from "express";
import prisma from "../db/index.js";

export default function setupChatRouter() {
    const router = express.Router();

    //create a chatroom
    router.post("/", async (req, res) => {
        const {userId, userTwoId} = req.body;

        try {
            const chatroom = await prisma.chatroom.create({
                data: {
                    user: {   //this will link user one
                        connect: [{id: userId }, {id: userTwoId}]
                    },
                    // messages: {   //create a message
                    //     create: {
                    //       senderUserName: 'System',
                    //       content: `You have started a chat with ${userTwoId}`,
                    //     },
                    //   },
                }
            });

            res.status(201).json({ 
                success: true,
                chatroom, 
                // recipientChatroom 
            });
        } catch(error) {
            console.error(error);
            res.status(500).json({error: "Server Error"})
        }
        

        // const recipientChatroom = await prisma.chatroom.create({
        //     data: {
        //       user: {
        //         connect: { id: recipientId },
        //       },
        //       messages: {
        //         create: {
        //           senderUserName: 'System',
        //           content: `You have started a chat with ${userId}`,
        //         },
        //       },
        //     },
        //   });
         
    });

    //get all chats for a user
    router.get("/userchats", async (req,res) => {

        try{
            const chatroom = await prisma.chatroom.findMany({
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
        } catch(error) {
            console.error(error);
            res.status(500).json({error: "Server Error"})
        }
    });

    //get chatroom by chatroom id
router.get("/:chatroomId", async (req, res) => {
    const chatId = req.params.chatroomId;

    const getChat = await prisma.chatroom.findFirst({
        where: {
            id: Number(chatroomId)
        }
    });

    res.status(200).json({
        success: true,
        getChat
    });
});

    return router;
}


