import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import PrivateRoute from './component/PrivateRoute';
import CreateEvent from './component/CreateEvent';

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
            <Link to="/home">Home</Link>
          </li>
        </ul>

      <Switch>
        <PrivateRoute exact path="/home"
        component={Home}
        />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/create-your-event" component={CreateEvent} />
        </Switch>
        
        <Route exact path="/" component={SignUp} />        

      </div>
    </Router>
  );
}

export default App;
