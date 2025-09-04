import React from "react";
import { assets } from "../../assets/assets";
import "./main.css";
const Main = () => {
  return (
    <div className="main michroma-regular">
      <div className="nav">
        <p>AuraAI</p>

        <img src={assets.user_icon} alt="" />

        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello, User!</span> Welcome back to AuraAI.
            </p>
          </div>
          <div className="info">
            <p>
              Your personal AI assistant for all your needs. How can I assist
              you today?
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src={assets.compass_icon} alt="" />
              <p>Explore</p>
            </div>
            <div className="card">
              <img src={assets.code_icon} alt="" />
              <p>Code Generation</p>
            </div>
            <div className="card">
              <img src={assets.message_icon} alt="" />
              <p>Image Creation</p>
            </div>
            <div className="card">
              <img src={assets.bulb_icon} alt="" />
              <p>Music Generation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
