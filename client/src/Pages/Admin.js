// Admin.js
import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import UserList from "./UserList";
import NewPhone from "./NewPhone";
import "../styles/admin.css"; // Import custom CSS for styling

function Admin() {
  const { username } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect immediately if the user is not "Admin"
    if (username !== "Admin") {
      navigate("/", { replace: true });
    }
  }, [username, navigate]);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>
      {username === "Admin" ? (
        <div className="admin-content">
          <NewPhone />
          <UserList />
        </div>
      ) : (
        <p className="not-admin-message">You are not an Admin</p>
      )}
    </div>
  );
}

export default Admin;
