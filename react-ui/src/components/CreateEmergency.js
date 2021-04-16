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
 

function CreateEmergency(props)
{ console.log("JJJJ")
const [comment, setComment] = useState();
const [FullName,setFullName]=useState();


   const [showLoading, setShowLoading] = useState(true);
   const [fullName, setOtp] = useState();
   const apiUrl = "http://localhost:3000/sendEmergency"; 
    const sendEmergency = async () => {
    var  data={comment:comment,fullName:fullName}
        console.log("kkkkK",comment);
    
     
        axios.post(apiUrl,data)
        .then(result => {
      console.log(result);

            props.history.push('/AdminFirstPage');

        }  
        )};
      
        const onChange = (e) => {
            e.persist();
            setComment({...comment, [e.target.name]: e.target.value});
          }


    return (

        <div  >
       
       <Jumbotron className="LogIn">
        <Form  >
        <center>
        <Form.Group>
        <Form.Label>Full Name</Form.Label>
         <Form.Control className="LogInTextBox" type="text" style={{width:"30%"}}  onChange={e => setFullName(e.target.value)} />
            <Form.Label>Type Of Emergency</Form.Label>
         <Form.Control className="LogInTextBox" type="text" style={{width:"30%"}}  onChange={e => setComment(e.target.value)} />
         
          </Form.Group>
          
          <br />
         <Button style={{backgroundColor:"black",width:"20%",fontSize:"40px",color:"grey"}} onClick={sendEmergency}  >  Send Emergency</Button>
       </center>
       </Form>
      </Jumbotron>

        </div>
         );
       }
       export default withRouter(CreateEmergency);