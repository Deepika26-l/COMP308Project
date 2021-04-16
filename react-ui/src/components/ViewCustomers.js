import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Card from "react-bootstrap/Card";
import '../Home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function ViewCustomers() {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);

  const apiUrl = "http://localhost:3000/adminViewCustomers";

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
    <div className="LogIn" >
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
              <th>ID</th>
              <th>First Name</th>
                <th>Last Name</th>
                <th> Email</th>
               
              </tr>
              
            </thead>

            <tbody>
            <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value._id}</p>
                 
                  ))}
                </td>
            <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.firstName}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.lastName}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value. email}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.packageLocation}</p>
                 
                  ))}
                </td>
                <td>
                  {data.x.map((value, index) => (
                    <p key={index}>{value.packagePrice}</p>
                 
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
export default ViewCustomers;