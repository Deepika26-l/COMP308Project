import { withRouter } from 'react-router-dom';
import '../Home.css';
import Button from 'react-bootstrap/Button';
import React, { Component }  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../Home.css';
function AdminPage(props)
{
    const createPatient = async () => {
        console.log("create package");
        props.history.push('/CreatePackage');
    }
    const ViewPatientDetails = async () => {
     
        props.history.push('/ViewPackage'); 
    }
    const ViewCustomers = async () => 
    {   
        console.log("view customers");
        props.history.push('/ViewCustomers');
    }
    const SendMotivationalTips=async () => {
        console.log("send attractive packages");
        props.history.push("/SendMotivationalTips");
    }

    return (

        <div className="LogIn"  >

<Navbar bg="dark"  color="faded" >
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="mr-auto">
          <Nav.Link color="grey"  className=" homeStyle"   href="/"> Logout</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
    
       <center>
       <br></br>
       <Button style={{backgroundColor:"grey",width:"40%",fontSize:"30px",color:"black"}} onClick={ViewCustomers}> View Patients</Button>
<br></br> <br></br>
       <Button style={{backgroundColor:"grey",width:"40%",fontSize:"30px",color:"black"}} onClick={createPatient}>Create Pateint Details</Button><br></br>
       <br></br>
       <Button style={{backgroundColor:"grey",width:"40%",fontSize:"30px",color:"black"}} onClick={ViewPatientDetails}>View Patient Details </Button>
       <br></br> <br></br>
       <Button style={{backgroundColor:"grey",width:"40%",fontSize:"30px",color:"black"}} onClick={SendMotivationalTips}>Send Motivational Tips</Button><br></br>
  
          
            </center>
        </div>
         );
       }
       export default withRouter(AdminPage);