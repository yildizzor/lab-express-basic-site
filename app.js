const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response, next) =>
  response.sendFile(__dirname + "/views/home-page.html")
);

app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);

app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "./views/works.html")
);

app.get("/photo", (request, response, next) =>
  response.sendFile(__dirname + "/views/photo.html")
);

app.listen(3000, () => console.log("Sener Sen's Page Server is started..."));
