import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';  
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';


import '../Home.css';
function Contact(props) {
    const [customer, setCustomer] = useState({  firstName: '', lastName: '',
   email: '',content:''});
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "http://localhost:3000/contact";
    const saveCustomer = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = { firstName:customer.firstName,
           email: customer.email, feedback: customer.feedback
        };
        var error;
        console.log(customer.feedback)
        axios.post(apiUrl, data)
          .then((result) => {
            //setShowLoading(false);
         }).catch((error) => setShowLoading(false));
          props.history.push('/Home');
      };
   
      const onChange = (e) => {
        e.persist();
        setCustomer({...customer, [e.target.name]: e.target.value});
      }
    
 

  return (
    <div>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
      <Jumbotron className="SignUp" >
        <Form onSubmit={saveCustomer} >
        <center>
          <Form.Group>
            <Form.Label> First Name :</Form.Label>
            <Form.Control  className="LogInTextBox"style={{width:"30%"}} type="text" name="firstName" id="firstName" placeholder="Enter First Name" value={customer.firstName} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email :</Form.Label>
            <Form.Control className="LogInTextBox" style={{width:"30%"}} type="text" name="email" id="email" rows="3" placeholder="Enter email" value={customer.email}onChange={onChange}  />
          </Form.Group>

          <Form.Group  controlId="exampleForm.ControlTextarea1">
           <Form.Label>Enter  Feedback : </Form.Label>
           <Form.Control as="textarea" rows="6" type="text" placeholder="Enter Feed back"  name="feedback" value={customer.feedback}onChange={onChange} />
           </Form.Group>
           </center>
          <br />
         <center>
          <Button style={{backgroundColor:"black",width:"20%",color:"white"}} variant="primary" type="submit">
            Save
          </Button> 
          </center>

        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(Contact);
