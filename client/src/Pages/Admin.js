import React from "react";
import Cookies from "js-cookie";
import UserList from "./UserList";
import NewPhone from "./NewPhone";

function Admin(){
    const user=Cookies.get("username")
    
    return(
        <>
            <p>Admin Panel</p>
                 {user=="Admin" ? (
            <>
              <NewPhone/>
              <UserList/>
            </>
             ):
                 (<p>You are not an Admin</p>)}
        </>
    )
   
    
}



export default Admin;