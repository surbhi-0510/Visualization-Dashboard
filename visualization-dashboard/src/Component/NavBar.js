import React from "react";
import { Link } from "react-router-dom";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { FcHome } from "react-icons/fc";

const NavBar = ({ theme, setTheme }) => {
  const setDarkMode = () =>
    document.querySelector("body").setAttribute("data-theme", "dark");

  const setLightMode = () =>
    document.querySelector("body").setAttribute("data-theme", "light");

  const toggleTheme = () => {
    setTheme((e) => !e);
    return theme ? setDarkMode() : setLightMode();
  };
  return (
    <div className="navBar">
      <div className="leftNav">
        <Link to={"/"} className="link homeIcon">
          {/* Home */}
          <FcHome fontSize={"2.1rem"} />
        </Link>
      </div>
      <div className="rightNav">
        <Link to={"/about"} className="link">
          About
        </Link>
        <Link to={"/contact"} className="link">
          Contact Us
        </Link>
        <div onClick={toggleTheme} className="light">
          {theme ? (
            <BsMoonStarsFill color="white" fontSize={"1.2rem"} />
          ) : (
            <MdSunny color="yellow" fontSize={"1.2rem"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
