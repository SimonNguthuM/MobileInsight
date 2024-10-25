import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, username, handleLogout }) => {
  return (
    <nav className="navbar" style={styles.navbar}>
      <div className="container-fluid" style={styles.container}>
        <a href="/" className="logo">
          MobileInsight
        </a>

        <div style={styles.navItems}>
          {isAuthenticated ? (
            <>
              <span style={styles.welcomeText}>Welcome, {username}</span>
              <button type="button" style={styles.button} onClick={handleLogout}>
                Logout
              </button>
              <Link to="/admin" style={styles.button}>Admin</Link>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.button}>Login</Link>
              <Link to="/signup" style={styles.button}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#e6f0fa",
    borderBottom: "1px solid #d1e0f0",
    padding: "10px 0",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "auto",
    padding: "0 20px",
  },
  logo: {
    fontSize: "1.5rem",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  navItems: {
    display: "flex",
    gap: "15px",
  },
  welcomeText: {
    color: "#555",
    fontSize: "1rem",
    cursor: "default",
  },
  button: {
    color: "#007bff",
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "none",
    fontSize: "1rem",
    cursor: "pointer",
    padding: "5px 10px",
    transition: "color 0.3s ease",
  },
};

export default Navbar;

// import React from "react";
// import "../styles/navbar.css"
// const Navbar = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <a href="">MobileInsight</a>
//       </div>
//       {/* <div className="nav">
//         <a href="">About</a>
//         <a href="">login</a>
//         <a href="">signup</a>
//       </div> */}

//     </nav>
//   );
// };

// export default Navbar;
