const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static("./public"))
const routerApi = require("./router/api");

server.use("/api", routerApi);

mongoose
  .connect("mongodb://127.0.0.1:27017/mern_stack_project_1")
  .then(() => console.log("Successfully conect db..."))
  .catch((error) => console.log(error));

const port = 5000;
server.listen(port, () => {
  console.log(`http://localhost:5000/api`);
});
