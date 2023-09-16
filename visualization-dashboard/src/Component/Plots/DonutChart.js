import React from "react";
import * as d3 from "d3";

const DonutChart = ({ data, x, y, changeData, theme }) => {
  let max;
  [data, max] = changeData(data, x, y);
  // console.log("max donutChart", max);

  const width = 928;
  const height = Math.min(width, 500);

  d3.select(".donutChart").selectAll("svg").remove();

  // Create the color scale.
  const color = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.name))
    .range(
      d3
        .quantize(
          (t) =>
            theme
              ? d3.interpolateSpectral(t * 0.5 + 0.5)
              : d3.interpolateSpectral(t * 0.5 + 0.7),
          data.length
        )
        .reverse()
    );

  //   // Create the donut layout and arc generator.
  const donut = d3
    .pie()
    .sort(null)
    .value((d) => d.y);

  const arc = d3
    .arc()
    .innerRadius(100)
    .outerRadius(Math.min(width, height) / 2 - 1)
    .cornerRadius(10);

  const labelRadius = arc.outerRadius()() * 0.8;

  // A separate arc generator for labels.
  const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);

  const arcs = donut(data);

  // Create the SVG container.
  const svg = d3
    .select(".donutChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2 - 20, width, height + 40])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

  // Add a sector path for each value.
  svg
    .append("g")
    .attr("stroke", "white")
    .selectAll()
    .data(arcs)
    .join("path")
    .attr("fill", (d) => color(d.data.x))
    .attr("class", "donutChartHover")
    .attr("d", arc)
    .append("title")
    .text((d) => `${d.data.x}: ${d.data.y.toLocaleString("en-US")}`);

  // Create a new arc generator to place a label close to the edge.
  // The label shows the value if there is enough room.
  svg
    .append("g")
    .attr("text-anchor", "middle")
    .selectAll()
    .data(arcs)
    .join("text")
    .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`)
    .call((text) =>
      text
        .append("tspan")
        .attr("y", "-0.4em")
        .attr("font-weight", "bold")
        .text((d) => d.data.x)
    )
    .call((text) =>
      text
        .filter((d) => d.endAngle - d.startAngle > 0.25)
        .append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 0.7)
        .text((d) => d.data.y.toLocaleString("en-US"))
    );

  svg.node();

  return <div className="donutChart"></div>;
};

export default DonutChart;
