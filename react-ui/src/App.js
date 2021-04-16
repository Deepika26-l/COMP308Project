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
import FirstPage from './components/CustomerFirstPage';
import AdminPage from './components/adminFirstPage';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Home from './components/Home';
import OtpPage from './components/OtpPage';
import CreatePackage from './components/CreatePackage';
import ViewPackage from './components/ViewPackage';
import ViewCustomers from './components/ViewCustomers';
import SendAttractivePackage from './components/SendAttractivePackage'
import Contact from './components/Contact';
import CustomerViewPackages from './components/CustomerViewPackages';
import CreateEmergency from './components/CreateEmergency';
import EnterParameters from './components/EnterParameters';
function App() {

  return (
  <div>
      <Router>
    
       <div>
       <Switch>
       
       <Route render ={()=> < CreateEmergency/>} path="/creteAnEmergencyAlert" />
       
       <Route render ={()=> < EnterParameters/>} path="/enterParameters" />
       <Route render ={()=> < CustomerViewPackages/>} path="/customerViewPackages" />
       <Route render ={()=> < SendAttractivePackage/>} path="/SendMotivationalTips" />
       <Route render ={()=> < ViewCustomers/>} path="/ViewCustomers" />
       <Route render ={()=> < ViewPackage/>} path="/ViewPackage" />
       <Route render ={()=> < CreatePackage/>} path="/CreatePackage" />
       <Route render ={()=> < AdminPage/>} path="/AdminFirstPage" />
       <Route render ={()=> < OtpPage/>} path="/AdminOtpPage" />
       <Route render ={()=> < Contact/>} path="/Contact" />
       <Route render ={()=> < FirstPage />} path="/FirstPage" />
       <Route render ={()=> < Login />} path="/Login" />
       <Route render ={()=> < SignUp />} path="/register" />
       <Route render ={()=> < Home/>} path="/" />
       

       </Switch>
      
       </div>
       </Router>
 </div>


  );
}

export default App;
