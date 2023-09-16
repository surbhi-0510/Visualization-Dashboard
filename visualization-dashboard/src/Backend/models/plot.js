const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
  endyear: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  startyear: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  // title: { type: String, unique: true },
  title: String,
  likelihood: Number,
});

const Plot = mongoose.model("Plot", plotSchema);

module.exports.plotSchema = plotSchema;
module.exports.Plot = Plot;
