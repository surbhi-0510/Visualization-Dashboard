const express = require("express");
const router = express.Router();
// const data = require("../../Data/jsondata.json");
const { Plot } = require("../models/plot");

router.get("/", async (req, res) => {
  const result = await Plot.find().select("-__v");
  res.send(result);
});

async function createPlotData(e) {
  try {
    let individualData = {
      endyear: e.end_year,
      intensity: e.intensity,
      sector: e.sector,
      topic: e.topic,
      insight: e.insight,
      url: e.url,
      region: e.region,
      startyear: e.start_year,
      impact: e.impact,
      added: e.added,
      published: e.published,
      country: e.country,
      relevance: e.relevance,
      pestle: e.pestle,
      source: e.source,
      title: e.title,
      likelihood: e.likelihood,
    };
    let plot = new Plot(individualData);
    let ans = await Plot.find({ title: e.title });
    // console.log("ans", ans.length,ans);
    if (!ans.length) {
      await plot.save();
      return plot;
    }
  } catch (err) {
    console.log(`Error in plot post: ${err}`);
  }
}

router.post("/", async (req, res) => {
  // console.log("post :", req.body);
  let data = req.body;
  // let r = await createPlotData(data[0]);
  // console.log("****", r);
  let r = data.map((e, i) => createPlotData(e));
  console.log(r);
  res.send("DATA SENT");
});

module.exports.plotRouter = router;
