import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Users = (props) => {
    
    const [users, setUsers] = useState([]);

    function routeToItem(e, user) {
        e.preventDefault();
        props.history.push(`/update-user/${user.id}`);
      }

    useEffect(()=> {
       axiosWithAuth().get("/users")
       .then(res => {
           console.log(res.data)
           setUsers(res.data)
       })
       .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <h1>List of Users</h1>
      
        {users.map((user)=> {
           return (
               <ul className="user" key={user.id}>
               <li>{user.name}</li>
               <li>{user.email}</li>
               <button onClick={e => routeToItem(e, user)}>Edit User</button>
               </ul>
               
           )
        })
        
        }
        
        
    </div>
    
    
  );
};

export default Users;
