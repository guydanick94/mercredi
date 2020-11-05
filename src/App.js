import React from 'react';

import './App.css';
import Body from './components/Body.js';
import About from './components/About.js';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login.js';
import Welcome from './components/users/Welcome';




import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App(){
  return (
    

  
    <Router>
<Switch>

    <Route exact path='/'>
<Body/>
    </Route>
    <Route  path='/about-us'>
<About/>
    </Route>

    <Route  path='/user.Signup'>
      <Registration/>
    </Route>

    <Route  path='/user-login'>
      <Login/>
    </Route>


    <Route  path='/welcome/pages'>
      <Welcome/>
    </Route>


</Switch>
</Router> 
  )
}


export default App;