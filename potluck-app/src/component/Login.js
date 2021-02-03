import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  
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

         axiosWithAuth().post("/login", credentials)
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
