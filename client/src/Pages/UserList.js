import React, { useState, useEffect } from "react";
import "../styles/userList.css"; 

function UserList() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5555/users")
            .then((r) => r.json())
            .then((users) => setUserList(users));
    }, []); // Adding an empty dependency array to run only on mount

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <div className="user-list">
                {userList.map((user) => (
                    <div key={user.id} className="user-card">
                        <p>
                            <strong>{user.id}</strong> {user.username}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
