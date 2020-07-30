import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from "../../actions/authActions"


const EmailPasswordAuth = (props) => {
  // Setting states
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Signing in to an existing account with "Email & Password" method
  const handleSubmit = (e) => {

    e.preventDefault();
    
    props.signIn({email, password});
  }

  const { auth, authError, errMessage } = props;

  if (auth.uid) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <h3>Signing In to an existing account</h3>
      <Form>
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
            Log In
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
      signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmailPasswordAuth);