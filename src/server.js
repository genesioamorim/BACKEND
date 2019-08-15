const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();
mongoose.connect('mongodb+srv://genis:gloria@cluster0-jvsbq.mongodb.net/backend?retryWrites=true&w=majority');
server.use(express.json());
server.use(routes);
 server.listen(3333);

