const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./client/public"));

//returns all IDs in json format from 5000
app.get("/api", (req, res) => {
  res.sendFile(path.resolve("./api/api.json"));
});

//Returns individual restaurants
app.get("/api/:id", (req, res) => {
  res.sendFile(path.resolve(`./api/${req.params.id}.json`));
});

//catch all
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
