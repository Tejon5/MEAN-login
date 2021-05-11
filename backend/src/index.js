const express = require("express");
const app = express();
require("./database");
const cors = require("cors")
require('dotenv').config();
app.use(cors())

app.use(express.json());
app.use("/", require("./routes/index"))

app.listen(process.env.APP_PORT);
//console.log("Servidor escuchando en puerto", process.env.APP_PORT)
