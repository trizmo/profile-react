const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// process.env.NODE_CONFIG_DIR = './config'
// const config = require("config");
// process.env.NODE_ENV = 'production';
// console.log('NODE_CONFIG_ENV: ' + config.util.getEnv('NODE_CONFIG_ENV'));

const port = process.env.PORT || 25502;

const app = express();
app.use(express.json());


const url = "mongodb://freehostia:free321321qwe@ds021166.mlab.com:21166/profile-db"
const options = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000
    }
  }, useNewUrlParser: true
}


const dbConnection = () => {
  mongoose.connect(url, options)
    .then(() => console.log("===== Connected to mongoDB =)"))
    .catch(err => {
      console.log("*ERROR: ", err)
      setTimeout(() => {
        dbConnection()
      }, 2500);
    })
}
dbConnection()


// ROUTING
app.use("/api/messages", require("./routes/api/contactMessage"))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/jobdetail', require('./routes/api/jobDetail'))
app.use('/api/timelog', require('./routes/api/timeLog'))


if (process.env.NODE_ENV === "production") {
  console.log("=== PRODUCTION MODE ===")
  app.use(express.static("client/build"))
  app.get('/*', (req, res) => {
    console.log("app.get * hit")
    console.log(res)
    let url = path.resolve(__dirname, "client", "build", "index.html");
    if (!url.startsWith('/api/')){
      url = url.substring(1);
    } // we're on local windows
    res.sendFile(url);
    // res.send(`
    // <html>
    // <body>
    // <h1>test works</h1>
    // </body>
    // </html>
    // `);
  });
} else { console.log("=== not in production mode ===") }


app.listen(port, () => {
  console.log("===== NODE SERVER STARTED =====")
  console.log("Server started on port: ", port)

})