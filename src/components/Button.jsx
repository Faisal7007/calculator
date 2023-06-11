import React from "react";
import "./Button.css";

function Button({ number, color, inputButton, clickValue, toggle }) {
  return (
    <div className="main_container">
      <button
        name={clickValue}
        onClick={inputButton}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {number}
      </button>
    </div>
  );
}

export default Button;
