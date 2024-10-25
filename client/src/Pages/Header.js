import React from "react";
import "../Submit.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/discover");
  };

  return (
    <div
      id="intro"
      style={{
        backgroundImage: `url('/pexels-japy-1069798.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <div style={{ zIndex: 2 }}>
      <p>
      Welcome to MobileInsight, your go-to platform for insightful reviews on the latest smartphones. 
      We’re passionate about providing you with comprehensive evaluations of top brands like Apple, Samsung, and Google. 
      Our mission is to empower you with the knowledge to make informed decisions, whether you’re looking for the latest features or the best value. Join us as we explore the world of mobile technology and help you
       find the perfect device for your needs.
</p>

        <button id="header-btn" onClick={handleDiscoverClick} style={{ marginTop: "20px" }}>
          Discover
        </button>
      </div>
    </div>
  );
}

export default Header;
