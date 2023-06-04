import express from "express";
import prisma from "../db/index.js";
import passport from "passport";

const router = express.Router();

//get all bids for a post
router.get("/:postId", passport.authenticate("jwt", { session: false, }),async (req, res) => {
    const postId = req.params.postId;

    const getBids = await prisma.bid.findMany({
        where: {
            postId: Number(postId)
        },
        include: {post: true}
    });

    res.status(200).json({
        sucuess: true,
        getBids
    });
});

//get all bids for a user
router.get("/", passport.authenticate("jwt", { session: false, }), async (req, res) => {
    const getBids = await prisma.bid.findMany({
        where: {
            userId: req.user.id
        },
        include: {post: true}
    });

    res.status(200).json({
        success: true,
        getBids
    });
});

//create a bid
router.post("/:postId", passport.authenticate("jwt", { session: false, }),async (req, res) => {
    const postId = req.params.postId;
    console.log(req.user);
    const createBid = await prisma.bid.create({
        data: {
            price: req.body.price,
            status: req.body.status,
            postId: Number(postId),
            userId: req.user.id
            // user: { connect: { id: req.user.id } },
            // post: { connect: { id: Number(postId) } },
        },
        
    });

    res.status(201).json({
        success: true,
    });
});

//get bid by id
router.get("/specBid/:bidId", passport.authenticate("jwt", { session: false, }),async (req, res) => {
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
router.delete("/:bidId", passport.authenticate("jwt", { session: false, }),async (req, res) => {
    const bidId = req.params.bidId;

    const deleteBid = await prisma.bid.deleteMany({
        where: {
            id: Number(bidId),
            userId: req.user.id
        },
    });

    res.status(200).json({
        success: true,
    });
});

//edit bid by id
router.put("/:bidId", passport.authenticate("jwt", { session: false, }), async (req, res) => {
    const bidId = req.params.bidId;

    const editBid = await prisma.bid.updateMany({
        where: {
            id: Number(bidId),
            userId: req.user.id
        },
        data: {
            price: req.body.price,
            status: req.body.status
        }
    });

    res.status(200).json({
        success: true,
        editBid
    });
});

router.get('/:postId/bids', passport.authenticate("jwt", { session: false, }), async (req, res) => {
    try {
      const postId = parseInt(req.params.postId);
  
      // Retrieve the highest bid for the post
      const highestBid = await prisma.bid.findFirst({
        where: { postId },
        orderBy: { price: 'desc' },
        include: { user: true, post: true },
      });
  
      // Retrieve the count of bids for the post
      const bidCount = await prisma.bid.count({ where: { postId } });
  
      res.status(200).json({
        success: true,
        highestBid,
        bidCount
      })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router;
