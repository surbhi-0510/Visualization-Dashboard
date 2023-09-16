const express = require("express");
const cors = require("cors");
const { plotRouter } = require("../routes/plot");

module.exports = function (app) {
  app.use(express.json({ limit: "10mb" }));
  app.use(
    express.urlencoded({ extended: true, limit: "10mb", parameterLimit: 50000 })
  );
  app.use(cors({ origin: "*" }));
  app.use("/", plotRouter);
};
