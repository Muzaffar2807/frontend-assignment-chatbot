import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { FiChevronRight } from "react-icons/fi";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/chatbot");
  };

  return (
    <div className="home-container">
      <h3>Enter into Student Info System</h3>
      <button onClick={handleSubmit}>
        Enroll Now! <FiChevronRight size={22} style={{ marginLeft: '25px'}}/>
      </button>
    </div>
  );
};

export default Home;
