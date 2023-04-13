import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

//get all bids for a user
router.get("/", async (req, res) => {
    const getBids = await prisma.bid.findMany({
        where: {
            userId: req.user.id
        }
    });

    res.status(200).json({
        success: true,
        getBids
    });
});

//create a bid
router.post("/:postId", async (req, res) => {
    const postId = req.params.postId;

    const createBid = await prisma.bid.create({
        data: {
            price: req.body.price,
            postId: Number(postId),
            userId: req.user.id
        },
        
    });

    res.status(201).json({
        success: true,
    });
});

//get bid by id
router.get("/:bidId", async (req, res) => {
    const bidId = req.params.bidId;

    const getBid = await prisma.bid.findFirst({
        where: {
            id: Number(bidId)
        },
        include: { user: true },
    });

    res.status(200).json({
        success: true,
        getBid
    });
});

//delete bid by id
router.delete("/:bidId", async (req, res) => {
    const bidId = req.params.bidId;

    const deleteBid = await prisma.bid.deleteMany({
        where: {
            id: Number(bidId)
        },
    });

    res.status(200).json({
        success: true,
    });
});


export default router;
