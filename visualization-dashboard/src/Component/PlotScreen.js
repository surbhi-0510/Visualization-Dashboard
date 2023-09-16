import React, { useEffect, useState } from "react";
import { Screen } from "./Screen";

const PlotScreen = ({ xcomp, ycomp, setYcomp, mainData, theme }) => {
  let [convertedData, setConvertedData] = useState([]);
  useEffect(() => {
    // console.log("***", xcomp, ycomp);
    let x = xcomp?.toLowerCase().split(" ").join("");
    let y = ycomp?.toLowerCase().split(" ").join("");
    // console.log(x, y);
    let c = mainData?.filter(
      (e) => e[x] !== null && e[y] !== null && e[x] !== "" && e[y] !== ""
    );
    setConvertedData(c);
  }, [xcomp, ycomp, mainData]);

  return (
    <>
      <div className="plotScreen">
        <div className="filter">
          <ul
            onClick={(e) => {
              let sp = e.target.innerText?.split("\n");
              // console.log(e.target.innerText,sp)
              if (sp.length === 1) {
                setYcomp(sp[0]);
              }
            }}
          >
            <li>Intensity</li>
            <li>Likelihood</li>
            <li>Relevance</li>
          </ul>
        </div>
        <div className="chosen">
          {xcomp.toUpperCase()} vs AVERAGE {ycomp.toUpperCase()}
        </div>
        <div className="screen">
          {
            <Screen
              x={xcomp?.toLowerCase().split(" ").join("")}
              y={ycomp?.toLowerCase().split(" ").join("")}
              convertedData={convertedData}
              theme={theme}
            />
          }
        </div>
      </div>
    </>
  );
};

export default PlotScreen;
