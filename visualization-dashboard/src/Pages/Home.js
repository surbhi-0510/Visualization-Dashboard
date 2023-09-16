import React, { useState, useEffect } from "react";
import SideBar from "../Component/SideBar";
import PlotScreen from "../Component/PlotScreen";
const data = require("../Data/jsondata.json");

const Home = ({theme}) => {
  const [xcomp, setXcomp] = useState("End Year");
  const [ycomp, setYcomp] = useState("Intensity");
  const [mainData, setMainData] = useState([]);

  async function storeDataMongo(url) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(url, options);
    // let r = await fetch(url, options);
    // console.log("fetch resp: ", r);
  }

  async function getMongoData(url) {
    let options = {
      method: "GET",
    };
    let result = await fetch(url, options);
    result = await result.json();
    setMainData(result);
    // console.log("RESP(getMongoData):", result);
  }

  useEffect(() => {
    let url = "http://localhost:5000/";
    storeDataMongo(url, data);
    getMongoData(url);
  }, []);

  return (
    <div className="home">
      {/* <div> */}
      <SideBar setXcomp={setXcomp} setYcomp={setYcomp} />
      <PlotScreen
        xcomp={xcomp}
        ycomp={ycomp}
        setYcomp={setYcomp}
        mainData={mainData}
        theme={theme}
      />
    </div>
  );
};

export default Home;
