import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-container">
      <span
        style={{ color: "white", textShadow: "5px -1px 2px rgba(0,0,0,0.9)" }}
        className="welcome-text"
      >
        <h1>Welcome to the dental and maxillofacial clinic</h1>
      </span>
      <p>CENTER OF CENTERAL IMPLANTS </p>
      <div className="hero-btn">
        <button className="btn btn-booking" eventkey={2}>
          <Link to="/Book-online"> BOOK ONLINE</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
