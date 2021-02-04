import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const initialState = {
         name: "",
         password: ""
    }
    
    const [credentials, setCredentials] = useState(initialState);

    const handleChange = (e)=> {
      // console.log(e.target.name, e.target.value)
      setCredentials({...credentials,
        [e.target.name] : e.target.value
      })

    }

       const login = (e)=> {
         e.preventDefault();

         axiosWithAuth().post("/users/login", credentials)
         .then(res => {
           console.log(res);
           localStorage.setItem("token", res.data.token) 
           props.history.push("./home")
         }
           )

         .catch(err => console.log(err))

       }

  return (
    <div>
    <form onSubmit={login}>
      <h3>Don't have an account?<Link to="/register">Register here</Link></h3>
      <h1>LOGIN</h1>
      <input 
      type="name"
      name= "name"
      id="name"
      value= {credentials.email}
      onChange={handleChange}
      placeholder= "name"
      />
      
      <input 
      type="password"
      name= "password"
      id="password"
      value= {credentials.password}
      onChange={handleChange}
      placeholder= "Password"
      />
      <button>Login</button>
    </form>
    </div>
    
  );
};

export default Login;
