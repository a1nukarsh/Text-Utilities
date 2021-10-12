import React from "react";

export default function TextForm() {
  return (
    <div>
      <div class="mb-3 container">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="myBox"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}
