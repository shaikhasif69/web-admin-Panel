const http = require("http");
const express = require("express");
const app = express();
const port = 4000;
const router = require("./router/router.js");

const server = http.createServer(app);
app.use(express.json());

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.use("/", router);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
