import React from "react";
import BarChart from "./Plots/BarChart";
import PieChart from "./Plots/PieChart";
import LineChart from "./Plots/LineChart";
import DonutChart from "./Plots/DonutChart";

export const Screen = ({ x, y, convertedData, theme }) => {
  // console.log(x, y, "convertedData(screen):", convertedData);
  return (
    <>
      <BarChart
        data={convertedData}
        x={x}
        y={y}
        changeData={changeData}
        theme={theme}
      />
      <PieChart
        data={convertedData}
        x={x}
        y={y}
        changeData={changeData}
        theme={theme}
      />
      <LineChart
        data={convertedData}
        x1={x}
        y1={y}
        changeData={changeData}
        theme={theme}
      />
      <DonutChart
        data={convertedData}
        x={x}
        y={y}
        changeData={changeData}
        theme={theme}
      />
    </>
  );
};

function changeData(data, x, y) {
  let o = {};
  let max = 0;
  for (let i = 0; i < data.length; i++) {
    if (o[data[i][x]] in o) {
      let t = o[data[i][x]];
      o[data[i][x]] = parseInt((t + data[i][y]) / 2);
    } else {
      o[data[i][x]] = data[i][y];
    }
  }
  let res = [];
  let c = 0;
  for (let key in o) {
    res.push({ index: c, x: key, y: o[key] });
    max = Math.max(max, o[key]);
    c++;
  }
  // console.log("data res", res);
  return [res, max];
}
