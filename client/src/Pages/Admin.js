import React from "react";
import Cookies from "js-cookie";
import UserList from "./UserList";
import NewPhone from "./NewPhone";
import "../styles/admin.css"; // Import custom CSS for styling

function Admin() {
  const user = Cookies.get("username");

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>
      {user === "Admin" ? (
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

