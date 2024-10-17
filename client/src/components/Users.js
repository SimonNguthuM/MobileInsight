import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
