import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Card from "react-bootstrap/Card";
import '../Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function ViewPackage() {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);

  const apiUrl = "http://localhost:3000/adminViewPackages";

  useEffect(() => {
    const fetchData = async () => {
      axios.get(apiUrl)
        .then(result => {console.log(result)
          console.log('result.data:', result.data)
          setData(result.data)
          console.log(data)
          console.log(result.data.x[0])
          setShowLoading(false)
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
    };
    fetchData();

  }, []);

  

  return (
    <div className="LogIn">
       <Navbar bg="dark"  color="faded" >
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="mr-auto">
          
            <Nav.Link color="grey"  className=" homeStyle"   href="/"> Logout</Nav.Link>
           
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showLoading === false
        ? <div>
          {showLoading && <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>}
        
          <br />
          <br />
        <center>
          <Table style={{paddingLeft:"50px",width:"50%"}} striped bordered variant="dark" responsive="lg" >
            <thead>
              <tr>
              <th>Patient Name</th>
                <th>Body Temperature</th>
                <th>Heart Rate</th>
                <th>Blood Pressure</th>
                <th>Repiratory rate</th>
              </tr>
              
            </thead>

            <tbody>
            <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.patientName}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.bodyTemperature}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.heartRate}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.bloodpressure}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.repiratoryRate}</p>
                 
                  ))}
                </td>
                
                


              

            
            </tbody>
          </Table>
          </center>
        </div>
        :
        < div>
          {showLoading && <Spinner animation="border" role="status">
            <span className="sr-only">Waiting for results...</span>
          </Spinner>}
        </div>

      }
    </div>

  );
}
export default ViewPackage;