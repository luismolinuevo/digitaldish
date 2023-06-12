import { Router } from "express";
//Using multer for file uploading
import multer from "multer";
import cloudinary from "../utils/upload.js";

//Jose: I'll leave as is and if ya want, ya can include passport for auth
export default function uploadRouter() {
  const router = Router();
  //Using the basic multer usage.
  const memStorage = multer.memoryStorage();
  const multerUpload = multer({ storage: memStorage }).single("images[]");

  router.post("/", multerUpload, async (req, res) => {
    try {
      const uploadedFilesPromises = req.files.map(async (file) => {
        //Need to convert the buffer (which is the acutal image) to a base64 string. That is so cloudinary servers know the actual image's data.
        const b64 = Buffer.from(file.buffer).toString("base64");
        //Creating a dataURI that Cloudinary can understand to render the image and understand the acutal data plus any additional data about the image
        let dataURI = "data:" + file.mimetype + ";base64," + b64;
        //Sets up the cloudinary uploading but doesn't actually do it.
        return await cloudinary.uploader.upload(dataURI);
      });

      //This is where the uploading acutally happens. All the promises get walked through one at a time.
      //Also you can go through each file and store their public_id to your DB along with any other info.
      const uploadedFiles = await Promise.all(uploadedFilesPromises);

      //Checking to see if the promises fulfilled match the amount of images sent
      if (uploadedFiles.length == req.files.length) {
        //The response cane be changed here.
        res.status(201).json({
          images: uploadedFiles.map((image) => image.public_id),
        });
      } else {
        res.status(500).json({
          message: "Something went wrong cause of client",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({
        message: "something went wrong cause of server",
      });
    }
  });

  return router;
}
