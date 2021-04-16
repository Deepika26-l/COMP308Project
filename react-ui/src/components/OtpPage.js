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
 
function OtpPage(props)
{ const [data, setData] = useState({});
   const [showLoading, setShowLoading] = useState(true);
   const [inputOtp, setOtp] = useState();

    const apiUrl = "http://localhost:3000/adminOtp";

    useEffect(() => {
      const fetchData = async () => {
        axios.get(apiUrl)
          .then(result => {console.log("jjjj")
            console.log('result.data:', result.data)
            setData(result.data)
            oTp=result.data.otp;
          console.log(oTp);
            setShowLoading(false)
          }).catch((error) => {
            console.log('error in fetchData:', error)
          });
      };
      fetchData();
    }, []);
    const auth = async () => {

if(inputOtp==oTp)
{
    props.history.push('/AdminFirstPage');
}
else
{
    props.history.push('/AdminOtpPage');
}
};



    return (

        <div  >
       
       <Jumbotron className="LogIn">
        <Form  >
        <center>
          <Form.Group>
            <Form.Label>Enter Otp</Form.Label>
         <Form.Control className="LogInTextBox" type="number" style={{width:"30%"}} onChange={e => setOtp(e.target.value)} />
          </Form.Group>
          
          <br />
         <Button style={{backgroundColor:"black",width:"20%",fontSize:"40px",color:"grey"}} onClick={auth}>Login</Button>
       </center>
       </Form>
      </Jumbotron>

         
        </div>
         );
       }
       export default withRouter(OtpPage);