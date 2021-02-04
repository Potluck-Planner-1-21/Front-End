import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import PrivateRoute from './component/PrivateRoute';
import CreateEvent from './component/CreateEvent';
import Users from './component/Users';
import UpdateUser from './component/UpdateUser';
import axios from 'axios';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  };
  const [users, setUsers] = useState([]);

    useEffect(()=> {
     const getItems = () => {
       axios.get("https://potluck-planner-1-21.herokuapp.com/users")
       .then(res => {
           console.log(res.data)
           setUsers(res.data)
       })
       .catch(err => console.log(err))
      };
      getItems();
    }, [])

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
        <PrivateRoute path="/users" component={Users} />
        <Route
        path="/update-user/:id"
        render={() => <UpdateUser users={users} setUsers={setUsers} />}
      />
        
        </Switch>
        
        <Route exact path="/" component={SignUp} />        

      </div>
    </Router>
  );
}

export default App;
