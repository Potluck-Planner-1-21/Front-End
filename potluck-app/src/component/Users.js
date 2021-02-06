import React, { useReducer, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { initialState, reducer } from '../reducer/index';



const Users = (props) => {
    
    // const [users, setUsers] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    function routeToItem(e, user) {
        e.preventDefault();
        props.history.push(`/update-user/${user.id}`);
      }

    useEffect(()=> {
       axiosWithAuth().get("/users")
       .then(res => {
           console.log(res.data)
          //  setUsers(res.data)
          dispatch({
            type: "FETCHING_USERS_SUCCESS",
            payload: res.data,
            isFetching: false
          })
       })
       .catch(err => console.log(err))
    }, [])

  return (
    <div>
      <h1>List of Users</h1>
       {(state.isFetching) ? 
       <h1>...loading</h1> : (
        <div>
        {state.users.map(user => {
          // console.log("hello", state.users);
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
       )}
    </div>
       
    
    
  );
};

export default Users;
