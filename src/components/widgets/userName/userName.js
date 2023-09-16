import React, { useState } from "react";
import "./userName.scss";

import { useDispatch } from "react-redux";
import { updateName } from "../../redux/userSlice";

const UserName = (props) => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => { //action
    if (event.keyCode === 13) {
      if (name !== "") {
        props.actions.handleUserName(name);
        props.actions.handleInputAge();

        dispatch(updateName(name));
        setName("");
        setDisabled(true);
      }
    }
  };
  return (
    <div className="input-container">
      {!disabled && (
        <input
          type="text"
          disabled={disabled}
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(event) => handleSubmit(event)}
          className="input-box"
        ></input>
      )}
    </div>
  );
};

export default UserName;
