import React from "react";

function UserList({userList}){
    return(
        <div>
            {userList.map((user)=>(
                <div key={user.id}>
                    <p>{user.id}:{user.username}</p>

                </div>
            ))}
        </div>
    )
}

export default UserList;