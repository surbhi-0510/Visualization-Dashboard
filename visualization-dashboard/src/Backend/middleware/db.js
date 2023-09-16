const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost:27017/dataVisualization")
    .then(() => {
      console.log("Connected to mongoDB...");
    })
    .catch((err) => {
      console.log("Error in connecting to MongoDB ", err);
    });
};
