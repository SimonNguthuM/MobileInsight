import React from "react";
import { MdFacebook } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "skyblue",
        padding: "20px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
         
        </div>
        <div className="social">
          <a href="">
            <MdFacebook 
            style={{  color: '#fff',  margin: '10px',fontSize:'22px'  }}
             />
          </a>
          <a href="">
            <FiInstagram
            style={{  color: '#fff', margin: '10px', fontSize:'20px'  }} />
          </a>
        </div>

        {}
        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "20px",
            marginTop: "20px",
            color: "#fff",
          }}
        >
          <p>&copy; 2024 MobileInsight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
