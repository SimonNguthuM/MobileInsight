// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const username = Cookies.get("username");

  const handleLogout = () => {
    fetch("http://localhost:5555/logout", { method: "POST" }).then(() => {
      Cookies.remove("token");
      Cookies.remove("username");
      window.location.reload();
    });
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "#e9ecef" }}>
      <div className="container-fluid">
        {/* link to the home page from any other page */}
        <a type="button" href="/" className="btn btn-lg">
          MobileInsight
        </a>
        <a type="button" href="/About" className="btn">
          About
        </a>

        {/* Show "Sign Up" or User's name with Logout based on authentication */}
        {username ? (
          <>
            <span className="btn" style={{ cursor: "default" }}>
              Welcome, {username}
            </span>
            <button
              type="button"
              className="btn"
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a type="button" href="/login" className="btn">
              Login
            </a>
            <a type="button" href="/signup" className="btn">
              Sign Up
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
