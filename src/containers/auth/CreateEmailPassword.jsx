import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from "../../actions/authActions"


const CreateEmailPassword = (props) => {
  // Setting states
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { auth, authError, errMessage } = props;

  if (auth.uid) {
    return <Redirect to="/" />
  }

  // Creating a new account with "Email & Password" method
  const handleSubmit = (e) => {

    const initials = ( firstName[0] + " " + lastName[0] );

    props.signUp({firstName, lastName, email, password, initials, imageURL: null});

    e.preventDefault();
  }

  return (
    <Container>
      <h3>Creating a new account</h3>
      <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="fisrtName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" placeholder="first name..." 
                onInput={(e) => {
                    setFirstName(e.target.value);
                }}
                />
            </Form.Group>
            <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" placeholder="last name..." 
                onInput={(e) => {
                    setLastName(e.target.value);
                }}
                />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" placeholder="example@gmail.com" 
                onInput={(e) => {
                    setEmail(e.target.value);
                }}
                />
            </Form.Group>
            <Form.Group as={Col} controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="password..." 
                onInput={(e) => {
                    setPassword(e.target.value);
                }}
                />
            </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={handleSubmit}> 
            Sign Up
        </Button>

        <Container>
            { authError 
            ? 
            <>
                <br/>
                <p><b>{authError}</b></p>
                <p><b>Hint: </b>{errMessage}</p>
            </> 
            : 
            null 
            }
        </Container>
        
      </Form>
        <hr style={{marginTop: "30px", marginBottom: "30px"}}/>
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    authError: state.auth.authError,
    errMessage: state.auth.errMessage,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (newProfile) => dispatch(signUp(newProfile))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateEmailPassword);