// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Hellow" aboutText ="hello about"/>
      {/* <TextForm heading="Enter the text for analysis"/> */}
      <About/>
    </>
  );
}

export default App;
