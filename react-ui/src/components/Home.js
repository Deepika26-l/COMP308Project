import { withRouter } from 'react-router-dom';
import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";

function Home()
{

    return (
        <div className="div-style">
            <Container>
            <div>
             <img align="center" src="medical.png" width="100" ></img>
            </div>
            
              <h1 style={{
                    textAlign: "center", 
                    color: "blueviolet"
                }}>Patient-Nurse Application</h1>
                
        
               <h2 style={{
                   textAlign:"center",
                   color:"red"
               }}>
                   <a href="/login">Login</a> or <a href="/signup">Sign Up</a>
               </h2>
               <br/>
               
            </Container>
        </div>
    );

}

export default withRouter(Home);