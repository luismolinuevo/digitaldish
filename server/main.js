import createServer from "./server.js";
import dotenv from "dotenv";
dotenv.config()

const server = await createServer();
const PORT = process.env.PORT || 8080

server.listen(8080, () => {
  console.log("Server is listening at localhost:8080");
});