import React from "react";
import "./CheckoutPage.scss";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../redux/userSlice";
import { FiChevronRight } from "react-icons/fi";

const CheckoutPage = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/chatbot");
  };

  return (
    <div className="checkout-container"> 
      {user.name !== "" ? (
        <span>
          Your name <b>{user.name}</b> aged <b>{user.age}</b> has been added to
          the student system.
          <br />
          <br />
          You have enrolled on <b>{user.date}</b> <b>{user.time}.</b>
          <br />
          <br />
          You may now exit
        </span>
      ) : (
        <span>
          Please add a user to the system!
          <button onClick={handleSubmit}>
            Enroll Now!{" "}
            <FiChevronRight size={22} style={{ marginLeft: "15px" }} />
          </button>
        </span>
      )}
    </div>
  );
};

export default CheckoutPage;
