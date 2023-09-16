import React from "react";

const SideBar = ({ setXcomp, setYcomp }) => {
  return (
    <>
      <div className="sideBar">
        {/* <div> */}
        <div>Dashboard</div>
        <ul
          onClick={(e) => {
            setXcomp(e.target.innerText);
            setYcomp("Intensity");
          }}
        >
          <li>End Year</li>
          <li>Sector</li>
          <li>Region</li>
          <li>Pestle</li>
          <li>Country</li>
          <li>Topic</li>
          {/* <li>Source</li> */}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
