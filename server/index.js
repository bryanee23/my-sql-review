const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router.js");

const app = express();
const port = 3434;
app.listen(port, () => console.log(`port:${port} is running, better go catch it!`));

// parsing requests to objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// you can also do:
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/", router);

// logging received requests to console
app.use(morgan("dev"));

app.use(cors());
