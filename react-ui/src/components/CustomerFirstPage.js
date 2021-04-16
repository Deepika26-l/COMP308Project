import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const images = [
  "https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1507100403890-47482dcd79e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80",
  'https://images.unsplash.com/photo-1506269351850-0428eaed2193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  "https://images.unsplash.com/photo-1543730742-0ef659b221fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1541262219680-541c15f59e15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1063&q=80"
];
 
const zoomOutProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
function CustomerFirstPage() {
    return (
      <div>
        <Navbar bg="dark"  color="faded" >
        
        <Navbar.Collapse id="basic-navbar-nav"  className="mr-sm-50">
          <Nav  className="mr-auto">
          
            <Nav.Link color="grey"  className=" homeStyle"   href="/"> Logout</Nav.Link>
            <Nav.Link color="grey"  className=" homeStyle"   href="/customerViewPackages"> View My Details</Nav.Link>
            <Nav.Link color="grey"  className=" homeStyle"   href="/creteAnEmergencyAlert"> Create an emergency alert</Nav.Link>
            <Nav.Link color="grey"  className=" homeStyle"   href="/enterParameters"> Enter Current Parameters</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
      </div>
    )
}

export default CustomerFirstPage;
