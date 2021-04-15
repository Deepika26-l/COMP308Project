import { withRouter } from 'react-router-dom';
import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
//import Jumbotron from 'react-bootstrap/Jumbotron';

function Home()
{

    return (
        <div>
            <div>
             <img align="center" src="medical.png" width="100"></img>
            </div>
            <Container>
              <h2 style={{
                    textAlign: "center", 
                    color: "blueviolet"
                }}>Patient-Nurse Application</h2>
                
        
               <h4 style={{
                   textAlign:"center",
                   color:"red"
               }}>
                   <a href="/login">Login</a> or <a href="/signup">Sign Up</a>
               </h4>
               <br/>
               
            </Container>
        </div>
    );

}

export default withRouter(Home);