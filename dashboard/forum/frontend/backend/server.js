const express = require('express')
const app = express()
const path = require("path");
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 80;
const db = require("./db");
const router = require("./routes");

//database connection

db.connect();

//midle ware
app.use(bodyParser.json({limit: "50mb" }))
app.use(bodyParser.urlencoded({exteded: true, limit:"50mb"}))


//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });

//routes
app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use("/uploads", express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch (e) {
      res.send("Oops! unexpected error");
    }
});
  

app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no ${PORT}`);
});