const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();
const db = config.get("mongoURI")
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose 
  .connect(db, { useNewUrlParser:true })
  .then(() => console.log("Connected to mongoDB..."))
  .catch(err => console.log("ERROR: ", err) )


if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })

app.listen(app, () => console.log("Server working on port: ", port))

}
