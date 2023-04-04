import express from  "express"
import prisma from "../db/index.js"
import passport from "passport"

const router = express.Router()

// Create a post at /
router.post("/", passport.authenticate("jwt", { session: false, }), async (request, response) => {
    try {
        const newPost = await prisma.post.create({
            data: {
                username: request.user.username,
                description: request.body.description,
                price: request.body.price,
                category: request.body.category,
                userId: request.user.id,
            }
        })

        if (newPost) {
            const postList = await prisma.post.findMany({
              where: {
                userId: request.user.id,
              }
            })
            response.status(201).json({
              success: true,
              message: "Post created",
              post: newPost,
              postList
            })
          } else {
            response.status(400).json({
              success: false,
              message: "Post was not created"
            })
          }
        } catch (e) {
          console.log(e)
          response.status(400).json({
            success: false,
            message: "Something went wrong"
          })
    }
})

// Get all post
router.get("/", async (request, response) => {
    try {
      const allPost = await prisma.post.findMany({
      })
  
      if (allPost) {
        response.status(200).json({
          success: true,
          message: "all post fetch!",
          post: allPost
        })
      } else {
        response.status(400).json({
          success: false,
          message: "Something went wrong!"
        })
      }
    } catch (error) {
      console.log(error)
      response.status(400).json({
        success: false,
        message: "could not get any post!"
      })
    }
  })

//   Get post by id
router.get("/:postId", async (request, response) => {
    console.log(request.params.postId);
    try {
      const getPostbyId = await prisma.post.findFirst({
        where: {
          id: parseInt(request.params.postId)
        }
      })
  
      if (getPostbyId) {
        response.status(200).json({
          success: true,
          message: "successfully fetched post by id!",
          post: getPostbyId
        })
      } else {
        response.status(400).json({
          success: false,
          message: "something went wrong, could not fetch data"
        })
      }
    } catch (error) {
      console.log(error)
      response.status(400).json({
        success: false,
        message: "Something went wrong, sorry!"
      })
    }
  })

//   Get post by an user
// router.get("/user/:userId", async function (request, response) {
//     const userId = parseInt(request.params.userId);
//     try {
  
//       const getPost = await prisma.post.findMany({
//         where: {
//           userId: userId,
//         },
//       });
  
//       response.status(200).json({
//         sucess: true,
//         getPost,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   });


// Delete a post
router.delete("/:postId", passport.authenticate("jwt", { session: false }), async (request, response) => {
    try {
      const deletePost = await prisma.post.deleteMany({
        where: {
          userId: request.user.id,
          id: parseInt(request.params.postId),
        },
      })
      if (deletePost) {
        const newPost = await prisma.post.findMany({
          where: {
            userId: request.user.id,
          },
        })
        response.status(200).json({
          success: true,
          message: "Post was successfully deleted!",
          postList: newPost
        })
      } else {
        response.status(400), json({
          message: "Something went wrong, post could not be deleted!"
        })
      }
    } catch (error) {
      console.log(error)
      response.status(400).json({
        success: false,
        message: "Something went wrong!"
      })
    }
  })


// User can edit their post
router.put("/:postId", passport.authenticate("jwt", { session: false, }), async (request, response) => {
    // console.log(request.params.id, typeof request.params.id, request.user.id, typeof request.user.id)
    try {
      const updatePost = await prisma.post.updateMany({
        where: {
          userId: request.user.id,
          id: parseInt(request.params.postId)
        },
        data: {
            description: request.body.description,
            price: request.body.price,
            category: request.body.category,
        },
      })
  
      if (updatePost) {
        const postList = await prisma.post.findMany({
          where: {
            userId: request.user.id,
          }
        })
        response.status(200).json({
          success: true,
          message: "Post information was updated",
          postList
        })
      } else {
        response.status(400).json({
          success: false,
          message: "Post not updated. Something failed."
        })
      }
    } catch (err) {
      console.log(err)
      response.status(400).json({
        success: false,
        message: "Something went wrong"
      })
    }
  })


export default router

  