import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SignUp = (props) => {
  
    const initialState = {
         name: "",
         password: "",
         email: ""
    }
    
    const [credentials, setCredentials] = useState(initialState);

    const handleChange = (e)=> {
      // console.log(e.target.name, e.target.value)
      setCredentials({...credentials,
        [e.target.name] : e.target.value
      })

    }

       const signin = (e)=> {
         e.preventDefault();
         props.history.push('./login');

         axiosWithAuth().post("/users/register", credentials)
         .then(res => {
           console.log(res);
        //    props.history.push("./login")
         }
           )

         .catch(err => console.log(err))

       }

  return (
    <div>
    <form onSubmit={signin}>
      <h1>REGISTER</h1>
      <input 
      type="text"
      name= "name"
      id="name"
      value= {credentials.name}
      onChange={handleChange}
      placeholder= "Name"
      />
      
      <input 
      type="password"
      name= "password"
      id="password"
      value= {credentials.password}
      onChange={handleChange}
      placeholder= "Password"
      />

      <input 
      type="text"
      name= "email"
      id="email"
      value= {credentials.email}
      onChange={handleChange}
      placeholder= "email"
      />
      <button>Sign up</button>
    </form>
    </div>
    
  );
};

export default SignUp;
