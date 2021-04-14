import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import Videos from './components/Videos';
// import ListPatients from './components/ListPatients';
// import DisplayPatient from './components/DisplayPatient';
// import DisplayAlert from './components/DisplayAlert';
// import CreateEmergencyAlert from './components/CreateEmergencyAlert';
// import AlertHistory from './components/AlertHistory';


function App() {

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Register</Nav.Link>   
            {/* <Nav.Link href="/alertshistory">Alert History</Nav.Link>   
            <Nav.Link href="/videos">Videos</Nav.Link>          */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>          
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < Login />} path="/login" />
          <Route render ={()=> < Signup />} path="/signup" /> 
          {/* <Route render ={()=> < Videos />} path="/videos" /> 
          <Route render ={()=> < ListPatients />} path="/patients" />
          <Route render ={()=> < DisplayPatient />} path="/patient/:id" />
          <Route render ={()=> < AlertHistory />} path="/alertshistory" />                  
          <Route render ={()=> < DisplayAlert />} path="/alerthistory/:id" />
          <Route render ={()=> < CreateEmergencyAlert />} path="/alerts" /> */}
          
      </div>

    </Router>


  );
}

export default App;