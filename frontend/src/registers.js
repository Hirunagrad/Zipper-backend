import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'



const registers = () =>{
    return(
       
        <center>
             <h1>Sign Up</h1>
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

  <p>Already have an Account  <a href="/login">  Log in</a></p>
  

  <a href="">
  <Button variant="primary"  style={{margin:"10px"}}>
    Sign Up
  </Button>
  </a>
 
  
  
</Form>
        </div>
        </center>
        
    
    );
}

export default registers;
