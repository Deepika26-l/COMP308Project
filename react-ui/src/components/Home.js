
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { Component }  from 'react';
import '../Home.css';
function Home(props)
{

    return (
       
<div className="body html">
<Navbar bg="dark"  color="faded" >
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="mr-auto">
          
            <Nav.Link color="grey"  className=" homeStyle"   href="/"> Home</Nav.Link>
            <Nav.Link color="grey"  className=" homeStyle"   href="/register"> Register</Nav.Link>
            <Nav.Link color="grey"  className=" homeStyle"   href="/Login"> Login</Nav.Link>
            <Nav.Link color="grey"  className=" homeStyle"   href="/Contact"> Contact</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    
<div className="three rows " id="first-page">
           
 
  <div className="three cols">
  
    <div className="schmancy tile pic0">
   
      <div className="content"> Be </div>
    </div>
    
    <div className="schmancy tile pic3">
      <div className="content">Healthy </div>
    </div>
    <div className="schmancy tile pic1">
      <div className="content"> </div>
    </div>
  </div>
  <div className="four cols">
    <div className="schmancy tile pic2">
      <div className="content"> Health </div>
    </div>
    <div className="schmancy tile pic1">
      <div className="content"> Is. </div>
    </div>
    <div className="schmancy tile pic2">
      <div className="content"> Wealth </div>
    </div>
    <div className="schmancy tile pic1">
      <div className="content"> </div>
    </div>
  </div> 
  <div className="three cols">
    <div className="schmancy tile pic0">
      <div className="content"> Wear</div>
    </div>
    <div className="schmancy tile pic3">
      <div className="content"> Mask</div>
    </div>
    <div className="schmancy tile pic1">
      <div className="content ">  </div>
    </div>
  </div>
  
  </div>
 
  </div>
 



          
    
    );

}

export default withRouter(Home);