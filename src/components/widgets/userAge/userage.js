import React, { useState } from "react";
import "./userAge.scss";

import { useDispatch } from "react-redux";
import { updateAge } from "../../redux/userSlice";

const UserAge = (props) => {
  const [age, setAge] = useState("");
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const ageOptions = [];
  for (let age = 18; age <= 40; age++) {
    ageOptions.push(age);
  }

  const handleAge = (ageValue) => {
    setAge(ageValue);
    props.actions.handleAge(ageValue);
    props.actions.handleExit();
    dispatch(updateAge(ageValue));
    setVisible(false);
  };

  return (
    <div className="age-container">
      {visible && (
        <select
          className="select-box"
          value={age}
          onChange={(e) => handleAge(e.target.value)}
        >
          <option value="">Select Age</option>

          {ageOptions.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default UserAge;
