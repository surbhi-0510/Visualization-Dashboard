import React from "react";
import * as d3 from "d3";

const BarChart = ({ data, x, y, changeData, theme }) => {
  let max;
  [data, max] = changeData(data, x, y);
  // console.log("fin bar", data);
  // console.log(max);
  const width = 1150;
  const height = 500;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };

  d3.select(".barChart").selectAll("svg").remove();

  const svg = d3
    .select(".barChart")
    .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height + 30]);

  const xScale = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([height - margin.bottom, margin.top]);

  svg
    .append("g")
    .attr("fill", theme ? "rgb(186, 144, 198)" : "rgba(249, 129, 196, 0.61)")
    .selectAll("rect")

    .data(data)
    .join("rect")
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => yScale(d.y))
    .attr("class", "barChartHover")
    .attr("title", (d) => d.y)
    .attr("height", (d) => yScale(0) - yScale(d.y))
    .attr("width", xScale.bandwidth());

  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale).tickFormat((i) => data[i].x))
    // .attr("padding-bottom", "10px")
    .selectAll("text")
    .attr("x", margin.bottom)
    .attr("y", -10)
    .attr("transform", "rotate(90)")
    .attr("font-size", "20px")
    .attr("text-anchor", "end");
  // .attr()

  svg
    .append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale).ticks(null, data.format))
    .attr("font-size", "20px");

  svg.node();

  return <div className="barChart"></div>;
};

export default BarChart;
