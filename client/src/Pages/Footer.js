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
          {/* Contact Information */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4 style={{ color: "#fff" }}>Contact Us</h4>
            <p style={{ color: "#fff" }}> Mobile St, Thika,</p>
            <p style={{ color: "#fff" }}>Phone: (+254) 714760756 </p>
            <p style={{ color: "#fff" }}>@mobileinsight.com</p>
            {/* <p style={{  color: '#fff' }}>Business Hours: Mon-Fri, 9 AM - 6 PM</p> */}
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4 style={{ color: "#fff" }}>Quick Links</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a
                  href="/about"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h4 style={{ color: "#fff" }}>Customer Service</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a
                  href="/help"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="/warranty"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Warranty Information
                </a>
              </li>
              <li>
                <a
                  href="/contact-support"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter
          <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
            <h4 style={{  color: '#fff' }}>Stay Connected</h4>
            <p>
              <a href="#" style={{ margin: '0 10px' }}>Facebook</a>
              <a href="#" style={{ margin: '0 10px' }}>X</a>
              <a href="#" style={{ margin: '0 10px' }}>Instagram</a>
            </p>
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" style={{ padding: '5px', width: '80%', maxWidth: '300px' }} />
              <button  style={{ padding: '5px 10px', marginLeft: '10px' }}>Subscribe</button>
            </form>
          </div> */}
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

        {/* Copyright Information */}
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
