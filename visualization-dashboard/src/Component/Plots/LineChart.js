import React from "react";
import * as d3 from "d3";

const LineChart = ({ data, x1, y1, changeData, theme }) => {
  let max;
  [data, max] = changeData(data, x1, y1);
  //   console.log("maScalelineChart", max);

  d3.select(".lineChart").selectAll("svg").remove();

  // Set dimensions and margins for the chart
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const width = 950 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Set up the x and y scales
  const xScale = d3.scaleLinear().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);

  // Create the SVG element and append it to the chart container
  const svg = d3
    .select(".lineChart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr("viewBox", [0, 0, width, height + 30]);

  // Define the x and y domains
  // xScale.domain(d3.extent(data, (d) => d.x));
  xScale.domain([0, data.length - 1]);
  yScale.domain([0, d3.max(data, (d) => d.y) + 1]);

  //   svg.append("g").data(data).enter().attr("x", (d, i) => xScale(i));

  // Add the x-axis
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(
      d3
        .axisBottom(xScale)
        .ticks(data.length)
        .tickFormat((i) => data[i]?.x)
    )
    .selectAll("text")
    .attr("x", margin.bottom)
    .attr("y", -10)
    .attr("transform", "rotate(90)")
    .attr("font-size", "17px")
    .attr("text-anchor", "end");

  // Add the y-axis
  svg
    .append("g")
    .call(d3.axisLeft(yScale))
    .selectAll("text")
    .attr("font-size", "16px");
  //   .ticks(null, data.format));

  // Create the line generator
  const line = d3
    .line()
    .x((d, i) => xScale(i))
    // .x((d,i) => i)
    .y((d) => yScale(d.y));

  // Add the line path to the SVG element
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", theme ? "rgb(186, 144, 198)" : "rgba(250, 103, 185, 1)")
    .attr("stroke-width", 3)
    .attr("d", line);
  // .attr('class','lineChartHover');

  return <div className="lineChart"></div>;
};

export default LineChart;
