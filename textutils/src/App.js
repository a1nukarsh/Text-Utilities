// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
    } else {
      setmode("light");
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  };
  return (
    <>
      <Navbar
        title="Hellow"
        aboutText="hello about"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm heading="Enter the text for analysis" />
      {/* <About/> */}
    </>
  );
}

export default App;
