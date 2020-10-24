const express = require("express");

const app = express();

app.use("/api/goods", require("./routers/goodsRouter"));

module.exports = app;
