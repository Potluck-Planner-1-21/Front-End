import React, { useEffect } from "react";
import { fetchUsers } from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';



const Users = ({fetchUsers, isFetching, users}) => {
    
  const { push } = useHistory();

    function routeToItem(e, user) {
        e.preventDefault();
        push(`/update-user/${user.id}`);
      }

    useEffect(()=> {
      fetchUsers();
    }, [fetchUsers])

  return (
    <div>
      <h1>List of Users</h1>
       {(isFetching) ? 
       <h1 className="loading">...Loading</h1> : (
        <div>
        {users.map(user => {
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

const mapStateToProps = (state) => {
  return {
   users: state.users,
   isFetching: state.isFetching
}
}

const mapDispatchToProps = {fetchUsers}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
