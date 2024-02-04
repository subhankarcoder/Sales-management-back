const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const SalesPersonDataHandler = require("./RouteHandler/SalesPersonDataHandler")
const SalesVisitStatusHandler = require("./RouteHandler/SalesVisitStatusHandler")

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000
const uri =
  "mongodb+srv://subhankarchakrabarti0:bloggingpassword@cluster0.d7zhato.mongodb.net/";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/details", SalesPersonDataHandler);
app.use("/status", SalesVisitStatusHandler);

app.listen(port, () => {
    console.log(`Port is running at http://localhost:${port}/`);
});
module.exports =  mongoose;
