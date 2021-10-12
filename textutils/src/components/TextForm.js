import React from "react";

export default function TextForm(props) {
  return (
    <div className="container">
      <div class="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea class="form-control" id="myBox" rows="9"></textarea>
      </div>
      <button className="btn btn-primary">Convert to UPPER CASE</button>
    </div>
  );
}
