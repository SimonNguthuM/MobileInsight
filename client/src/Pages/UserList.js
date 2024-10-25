import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/userList.css"; 

function UserList() {
    const [userList, setUserList] = useState([]);
    const [search, setSearch]= useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5555/users")
            .then((r) => r.json())
            .then((users) => setUserList(users));
    }, []); // Adding an empty dependency array to run only on mount

    return (
        <div className="user-list-container">
            <h2>User List</h2>

            <input
            className="form-control me-2"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search......"
            aria-label="Search"
            style={{padding: '10px'}}
          />

            <div className="user-list">
                {userList
                .filter((user)=>{
                    return search === "" ? user : user.username.includes(search);
                })
                .map((user) => (
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
