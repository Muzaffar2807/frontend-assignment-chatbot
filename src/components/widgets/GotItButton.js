import React from "react";
import "./GotItButton.scss";

const Options = (props) => {
  return (
    <div className="options">
      <div className="options-container">
        <div
          className="option-item"
          onClick={() =>    props.actions.handleGotIt("Got it!")}
        >
          Got It!
        </div>
      </div>
    </div>
  );
};

export default Options;
