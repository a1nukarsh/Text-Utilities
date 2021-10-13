import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case has been clicked");
    let UpperText = text.toUpperCase();
    setText(UpperText);
  };
  const handleLoClick = () => {
    console.log("Lower Case has been clicked");
    let LowerText = text.toLowerCase();
    setText(LowerText);
  };
  const handleCopy = () => {
    console.log("Text Copied");
    let copyText = document.getElementById('myBox');
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
  };
  const clear = () => {
    console.log("Clear has been clicked");
    // let clear = text.toUpperCase();
    setText(" ");
  };
  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text" --> wrong way to change text
  //   setText("new text") // Right way to change text
  return (
      <>
    <div className="container my-3">
      <label htmlFor="myBox" className="form-label">
        {props.heading}
      </label>
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        id="myBox"
        rows="9"
      ></textarea>
      <div>
      <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
        Convert to UPPER CASE
      </button>
      <button className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>
        Convert to lower case
      </button>
      </div>
      <div >
      <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary my-1 mx-1" onClick={clear}>
        Clear
      </button>
      </div>
      
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.01 * text.split(" ").length} Minute Read</p>
        <h3 className="my-2">Preview</h3>
        <p>{text.length>0?text:"You can preview your text here"}</p>
    </div>
    </>
  );
}
