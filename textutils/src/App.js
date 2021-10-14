// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null)
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setmode("light");
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light Mode has been enabled", "success")
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
      <Alert alert={alert}/>
      <TextForm heading="Enter the text for analysis" mode={mode}/>
      {/* <About/> */}

    </>
  );
}

export default App;
