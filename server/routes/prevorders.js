import express from  "express"
import prisma from "../db/index.js"
import passport from "passport"

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false, }), async (req, res) => {
    const getPrevOrders = await prisma.prevOrder.findMany({
        where: {
            userId: req.user.id
        },
        include: { post: true },
    });

    res.status(200).json({
        success: true,
        getPrevOrders
    });
});

router.post("/", passport.authenticate("jwt", { session: false, }), async (req, res) => {
    const createPrevOrder = await prisma.prevOrder.create({
        data: {
            finalPrice: req.body.finalPrice,
            status: req.body.status,
            postId: req.body.postId,
            userId: req.user.id,
        }
    });

    res.status(201).json({
        success: true,
    })
} )


export default router;
