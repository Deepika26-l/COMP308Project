import { withRouter } from 'react-router-dom';

import React, { Component }  from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home(props)
{

    return (
        <div>
            <h2>Patient-Nurse Application</h2>
            <Jumbotron>
            
            <h4>
                <a href="/login">Login</a> or <a href="/signup">Sign Up</a>
            </h4>
            <br/>
            <img src="medical.png.jpg" width="915"></img>
            </Jumbotron>
        </div>
    );

}

export default withRouter(Home);