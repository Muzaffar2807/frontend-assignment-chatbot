import React from "react"; 
import "./AuthLayout.scss";
import Header from "./Header";

const AuthLayout = (props) => {
  return (
    <div className="auth-layout">
      <div className="content-main">
        <div className="header-layout">
          <Header />
        </div>
        <div className="content-layout">{props.children}</div>
        <div className="footer-layout">
         
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
