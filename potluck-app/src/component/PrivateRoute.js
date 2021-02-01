import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
          {...rest} 
             render={(componentProps) => {
                 //   If the token is in localStorage, render the component
                 if (localStorage.getItem("token")){
                     return <Component {...componentProps} />
                 }
                // Otherwise redirect to login
                 else {
                     return <Redirect to="/login" />
                 }
             }}
        />
    )
}

export default PrivateRoute;