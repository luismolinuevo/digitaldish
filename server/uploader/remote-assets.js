import express, { json } from "express";
import { v2 } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({
    path: "./../.env"
});

const cloudinary = v2


// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });



const app = express()
const port = process.env.PORT || 8080;

app.use(json())

app.get('/', async(req,res)=>{

console.log(process.env.CLOUD_NAME);
   try {

//creates and uploads any public url
    const data = await cloudinary.uploader.upload("http://clipart-library.com/data_images/6103.png", {public_id: "rubber-ducky", folder:"/samples/animals"})
    console.log(data);
    

    console.log(data);
    res.status(200).json({
        success:true
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        success:false
    })
   }


})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
