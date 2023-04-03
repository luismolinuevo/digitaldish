import createServer from "./server.js";

const server = createServer();

server.listen(8080, () => {
  console.log("Server is listening at localhost:8080");
});