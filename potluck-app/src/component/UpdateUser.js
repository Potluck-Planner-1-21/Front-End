import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams, useHistory } from "react-router-dom";

const UpdateUser = (props) => {
    const { push } = useHistory();
    const { id } = useParams();

    const initialState = {
        name: "",
        email: ""
    }

    const [ user, setUser ] = useState(initialState);

    useEffect(() => {
        // console.log("items prop", props.items);
        const foundItem = props.users.find((user) => user.id.toString() === id);
        // console.log("found item", foundItem);
        if (foundItem) {
          setUser(foundItem);
        }
      }, [id, props.users]);

    const handleChange = (e)=> {
        // console.log(e.target.name, e.target.value)
        setUser({...user,
          [e.target.name] : e.target.value
        })
  
      }

      const saveEdit = (e)=> {
          e.preventDefault();
      axiosWithAuth()
      .put(`/users/${id}`, user)
      .then((res) => {
        //   console.log("this is PUT",res)
        axiosWithAuth().get("/users")
        .then(res => {
            console.log("this is GET inside PUT", res)
            props.setUsers(res.data);
            push('/users');
        })
        
      })
      .catch((err) => console.log(err));
      }

      const deleteUser = (id) => {
        // make a delete request to delete this color
        axiosWithAuth().delete(`/users/${id}`)
          .then((res) => {
              console.log("Testing Delete endpoint", res)
            //   {<div style="color: red">{res.data.message}</div>} //Donno if it works.
           axiosWithAuth().get("/users")
           .then(res => {
            props.setUsers(res.data);
           })
            
          })
          .catch((err) => console.log(err));
      };

    return (
    <form onSubmit={saveEdit}>
      <h1>List of Users</h1>
      <input 
      type="name"
      name= "name"
      id="name"
      value= {user.name}
      onChange={handleChange}
      placeholder= "name"
      />
      
      <input 
      type="email"
      name= "email"
      id="email"
      value= {user.email}
      onChange={handleChange}
      placeholder= "email"
      />
      <button>Save</button>
      <button onClick={(e) => {
                  e.stopPropagation();
                  deleteUser(user.id);
                }} >Delete
       </button>
       
    </form>
    )
}

export default UpdateUser;