import "./App.css";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useState } from "react";

function App() {
  let [theme, setTheme] = useState(true);

  return (
    <div className="App">
      <NavBar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path={"/"} element={<Home theme={theme} />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
