// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, username, handleLogout }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#e9ecef" }}>
      <div className="container-fluid">
        <a href="/" className="btn btn-lg">MobileInsight</a>
        <a href="/About" className="btn">About</a>

        {isAuthenticated ? (
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
            <Link to="/login" className="btn">Login</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
