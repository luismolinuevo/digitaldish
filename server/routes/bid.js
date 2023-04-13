import express from "express";
import prisma from "../db/index.js";

const router = express.Router();

//create a bid
router.post("/:postId", async (req, res) => {
    const postId = req.params.postId;

    const createBid = prisma.bid.create({
        data: {
            price: req.body.price,
            postId: Number(postId)
        }
    });

    res.status(201).json({
        success: true,
    });
});

export default router;
