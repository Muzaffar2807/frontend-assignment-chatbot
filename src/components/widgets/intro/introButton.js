import React, { useState } from "react";
import "./introButton.scss";

const Options = (props) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    props.actions.handleGotIt("Got it!");
    setHidden(true);
  };

  return (
    <>
      {!hidden && (
        <div className="options">
          <div className="options-container">
            <div className="option-item" onClick={() => handleClick()}>
              Got It!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Options;
