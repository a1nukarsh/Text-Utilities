// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="Hellow"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <TextForm heading="Enter the text for analysis" mode={mode} />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
