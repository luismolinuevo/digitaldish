import express from  "express"
import prisma from "../db/index.js"
import passport from "passport"

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false, }), async (req, res) => {
    const getPrevOrders = await prisma.prevOrder.findMany({
        where: {
            userId: req.user.id
        }
    });

    res.status(200).json({
        success: true,
        getPrevOrders
    })
})


export default router;
