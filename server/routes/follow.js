import express from "express";
import prisma from "../db/index.js";
import passport from "passport";

const router = express.Router();

router.post("/following", passport.authenticate("jwt", { session: false }), async (req, res) => {
    
    try {
      const followingUser = await prisma.followers.findFirst({
        where: {
          AND: [{ followerId: req.user.id }, { userId: req.body.userId }],
        },
        include: {
          user: true,
        },
      });

      if (followingUser) {
        res.status(400).json({
          success: false,
          message: "You are already following this user",
        });

      } else {
        await prisma.followers.create({
          data: {
            followerId: req.user.id,
            userId: req.body.userId,
          },
        });

        res.status(201).json({
          success: true,
          message: "You are now following this user",
        });
      }

    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);


router.delete("/unfollow", passport.authenticate("jwt", { session: false }), async (req, res) => {
    
    const unfollowUser = await prisma.followers.deleteMany({
      where: {
        followerId: req.user.id,
        userId: req.body.userId,
      },
    });

    if (unfollowUser.count === 0) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
      
    } else {
      res.status(200).json({
        success: true,
        message: "user was successfully unfollowed",
      });
    }
  }
);

export default router;
