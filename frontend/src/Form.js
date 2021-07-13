import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'



const form = () =>{
    return(
        <center>
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
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </center>
        
    
    );
}

export default form;