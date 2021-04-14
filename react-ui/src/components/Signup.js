import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";


const Signup = props => {

    const [state, setState] = useState({
        nurseId: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
        email: "",
        password: ""
    });

    //
    const [showLoading, setShowLoading] = useState(false);

    const handleOnSubmit = event => {
        setShowLoading(true);
        event.preventDefault();
        console.log(state);
            props.history.push({
            pathname: "/",          /*********TBD*********/
            state
            });
    };

  const onChange = e => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //
  return (
    <div>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "3vw",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "30vw",
              height: "auto",
            }}
          >
            <h1 
                style={{
                    textAlign: "center", 
                    color: "blueviolet"
                }}>
                Register
            </h1>
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control
                    style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                    }}
                    type="text"
                    step=".1"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    value={state.firstName}
                    onChange={onChange}
                    required
                    />
                </Form.Group>
                {/* */}
                <Form.Group>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control
                    style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                    }}
                    type="text"
                    step=".1"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    value={state.lastName}
                    onChange={onChange}
                    required
                    />
                </Form.Group>
                {/* */}
                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                    style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                    }}
                    type="email"
                    step=".1"
                    name="email"
                    id="email"
                    placeholder="my@mail.com"
                    value={state.email}
                    onChange={onChange}
                    required
                    />
                </Form.Group>
                {/* */}
                <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                    style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                    }}
                    type="password"
                    step=".1"
                    name="password"
                    id="password"
                    placeholder="******"
                    value={state.password}
                    onChange={onChange}
                    required
                    />
                </Form.Group>
                {/* */}
                <Form.Group>
                    <Form.Label>User Type: </Form.Label>
                    <Form.Control
                        style={{
                            width: "100%",
                            padding: "12px 20px",
                            margin: "8px 0",
                            display: "inline-block",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            boxSizing: "border-box",
                        }}
                        as="select"
                        step="any"
                        name="userType"
                        id="UserType"
                        value={state.userType}
                        onChange={onChange}
                        required
                    >
                        <option value="Patient">Patient</option>
                        <option value="Nurse">Nurse</option>
                    </Form.Control>
                </Form.Group>                
                <Button
                    style={{
                    border: "none",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "10px",
                    backgroundColor: "blueviolet",
                    }}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
          </div>
        </div>
      </Container>
      </div>
  );
};
export default Signup;