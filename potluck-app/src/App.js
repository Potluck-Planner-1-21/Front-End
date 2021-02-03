import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import CreateEvent from './component/CreateEvent';
import HomePage from './component/HomePage';
import PrivateRoute from './component/PrivateRoute';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">Logout</Link>
          </li>
          <li>
            
          </li>
        </ul>

      <Switch>
        <PrivateRoute exact path="/home"
        component={HomePage}
        />
        <Route path="/login" component={SignUp} />
        <Route path="/login" component={Login} />
        </Switch>
        <Route path="/login" component={Login} />
        
        
        
        
      {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
