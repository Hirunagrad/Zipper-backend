import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'



const loggins = () =>{
    return(
       
        <center>
             <h1>Sign in</h1>
            <div className="col-2">
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <br/>

   <p>Don't have an Account <a href="/register">Sign Up</a></p>

  <a href="/login">
  <Button variant="primary"  style={{margin:"10px"}}>
    Loggin
  </Button>
  </a>
 
  
</Form>
        </div>
        </center>
        
    
    );
}

export default loggins;
