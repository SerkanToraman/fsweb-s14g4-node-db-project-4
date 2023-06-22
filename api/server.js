const express = require("express");
const server = express();
const tarifRouter = require("./tarifler/tarif-router");
server.use(express.json());

server.use("/api/tarif",tarifRouter);

module.exports = server;