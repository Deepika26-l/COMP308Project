import { withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
var result;
var oTp;
 

function SendAttractivePackage(props)
{ console.log("JJJJ")
const [patient, setPatient] = useState();
const [tip,setTip]=useState();


   const [showLoading, setShowLoading] = useState(true);
   const [inputOtp, setOtp] = useState();
   const apiUrl = "http://localhost:3000/sendAttractivePackage"; 
    const sendPackage = async () => {
    var  data={Id:patient,tip:tip}
        console.log("kkkkK",patient);
        console.log("kkkkK",tip);
     
        axios.post(apiUrl,data)
        .then(result => {
      console.log(result);

            props.history.push('/AdminFirstPage');

        }  
        )};
      
        const onChange = (e) => {
            e.persist();
            setPatient({...patient, [e.target.name]: e.target.value});
          }


    return (

        <div  >
       
       <Jumbotron className="LogIn">
        <Form  >
        <center>
        <Form.Group>
            <Form.Label>Enter Patient Id</Form.Label>
         <Form.Control className="LogInTextBox" type="text" style={{width:"30%"}}  onChange={e => setPatient(e.target.value)} />
         <Form.Label>Enter Motivational Tips</Form.Label>
         <Form.Control className="LogInTextBox" type="text" style={{width:"70%",height:"60%"}}  onChange={e => setTip(e.target.value)} />
          </Form.Group>
          
          <br />
         <Button style={{backgroundColor:"black",width:"20%",fontSize:"40px",color:"grey"}} onClick={sendPackage}    >  Send Motivational Tips to Patient</Button>
       </center>
       </Form>
      </Jumbotron>

        </div>
         );
       }
       export default withRouter(SendAttractivePackage);