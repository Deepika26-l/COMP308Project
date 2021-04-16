import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';  
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import '../Home.css';
function CreatePackage(props) {   

    const [Blood, setBlood] = useState({ patientName:'', bodyTemperature: '', packagedescription: '', packageLocation: '',packagePrice: '' });
    const [showLoading, setShowLoading] = useState(false);
    const apiUrl = "http://localhost:3000/createBlood";
    const savePackage = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = { patientName:Blood.patientName,bodyTemperature:Blood.bodyTemperature, heartRate: Blood.heartRate, 
          bloodpressure: Blood.bloodpressure, repiratoryRate:Blood.repiratoryRate };
           var error;
        axios.post(apiUrl, data)
          .then((result) => {
            //setShowLoading(false);
         }).catch((error) => setShowLoading(false));
          props.history.push('/AdminFirstPage');
      };
   
      const onChange = (e) => {
        e.persist();
        setBlood({...Blood, [e.target.name]: e.target.value});
      }
    
 

  return (
    <div>
      {showLoading && 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> 
      } 
      <Jumbotron className="SignUp" >
        <Form onSubmit={savePackage} >
        <center>
        <Form.Group>
            <Form.Label>Patient Name</Form.Label>
            <Form.Control className="LogInTextBox" style={{width:"30%"}} type="text" name="patientName" id="patientName" rows="3" placeholder="Enter patientName" value={Blood.patientName}onChange={onChange}  />
          </Form.Group> 
          <Form.Group>
            <Form.Label> Body Temperature</Form.Label>
            <Form.Control  className="LogInTextBox"style={{width:"30%"}} type="text" name="bodyTemperature" id="bodyTemperature" placeholder="Enter bodyTemperature" value={Blood.bodyTemperature
            } onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label> Heart Rate</Form.Label>
            <Form.Control className="LogInTextBox" style={{width:"30%"}} type="text" name="heartRate" id="heartRate" placeholder="Enter heartRate" value={Blood.heartRate}onChange={onChange}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control className="LogInTextBox" style={{width:"30%"}} type="text" name="bloodpressure" id="bloodpressure" rows="3" placeholder="Enter bloodpressure" value={Blood.bloodpressure}onChange={onChange}  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repiratory Rate</Form.Label>
            <Form.Control className="LogInTextBox" style={{width:"30%"}} type="text" name="repiratoryRate" id="repiratoryRate" rows="3" placeholder="Enter repiratoryRate" value={Blood.repiratoryRate}onChange={onChange}  />
          </Form.Group> </center>
          <br />
         <center> <Button style={{backgroundColor:"black",width:"20%",color:"white"}} variant="primary" type="submit">
            Save
          </Button> </center>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default withRouter(CreatePackage );
