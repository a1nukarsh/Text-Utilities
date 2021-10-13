import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case has been clicked");
    let UpperText = text.toUpperCase()
    setText(UpperText);
  };
  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text" --> wrong way to change text
  //   setText("new text") // Right way to change text
  return (
    <div className="container">
      <div className="mb-3">
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
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UPPER CASE
      </button>
    </div>
  );
}
