import React from "react";
import "../Submit.css"
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/about")

  };
  return (
    <div id="intro" style={{backgroundColor:'#f8f9fa'}}>
      <p>
        {/* intro */}
        Welcome to MobileInsight! Discover the latest smartphones from top
        brands, tailored to fit your lifestyle and budget. Whether you're
        looking for cutting-edge technology or a reliable everyday device, our
        curated selection and expert guidance ensure you find the perfect mobile
        phone. Explore, compare, and connect with confidence.
      </p>
      
<button onClick={handleDiscoverClick}>Discover</button>
    </div>
  );
}

export default Header;
