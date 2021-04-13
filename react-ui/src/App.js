import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateVitalSigns from "./components/CreateVitalSigns";
import Alert from "./components/Alert";
import ListVitalSigns from "./components/ListVitalSigns";
import MotivationalTips from "./components/MotivationalTips";


function App(){
  return(
    <Router>

      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/">CreateVitalSigns</Nav.Link>
            <Nav.Link href="/">ListVitalSigns</Nav.Link>
            <Nav.Link href="/">MotivationalTips</Nav.Link>
            <Nav.Link href="/">Alert</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <Route render = {() => <Home/>} path="/" />
        <Route render = {() => <Signup/>} path="/" />
        <Route render = {() => <Login/>} path="/" />
        <Route render = {() => <CreateVitalSigns/>} path="/" />
        <Route render = {() => <ListVitalSigns/>} path="/" />
        <Route render = {() => <MotivationalTips/>} path="/" />
        <Route render = {() => <Alert/>} path="/" />
      </div>
    </Router>
  );
}


// const App = () => (
//   <BrowserRouter>
//     <div className="container">
//       <Switch>
//         <Route component={Home} path="/" exact={true} />
//         <Route component={Signup} path="/signup" />
//         <Route component={Login} path="/login" />
//         <Route component={CreateVitalSigns} path="/" />
//         <Route component={ListVitalSigns} path="/" />
//         <Route component={Alert} path="/" />
//         <Route component={MotivationalTips} path="/" />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

export default App;
