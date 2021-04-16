import React, { useState, useEffect } from 'react';
import '../Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import '../Home.css';

function Login(props) {

  const [screen, setScreen] = useState('auth');
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const apiUrl = "http://localhost:3000/signin";


  const auth = async () => {

    console.log(email)
    try {
      const loginData = { auth: { email, password } };
      console.log('calling auth')
      email.includes("nurse")
      if(email.includes("nurse"))
      {
      const res = await axios.post(apiUrl, loginData);
      if(res.data.authentication)
      {
      
      props.history.push('/AdminOtpPage');
      }
      else
      {
        console.log("kkkkk");
        props.history.push('/Login');
      }

      }
      else
      {

      const res = await axios.post(apiUrl, loginData);
      console.log(res.data.authentication);

      if(res.data.authentication)
      {
      props.history.push('/FirstPage');
      }
      else{
        console.log("kkkkk");
        props.history.push('/Login');
      }
    }
    } catch (e) { 
      console.log(e);
    }
  
  };

  
 
  return (

 <div  >





      <Jumbotron className="LogIn">
        <Form  >
        <center>
          <Form.Group>
            <Form.Label>Email</Form.Label>
         <Form.Control className="LogInTextBox" type="text" style={{width:"30%"}} onChange={e => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control className="LogInTextBox" type="password" style={{width:"30%"}} onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
          <br />
         <Button style={{backgroundColor:"black",width:"20%",fontSize:"40px",color:"grey"}} onClick={auth}>Login</Button>
       </center>
       </Form>
      </Jumbotron>
  
 </div>
  );
}

export default withRouter(Login);


