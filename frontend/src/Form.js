import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'



const form = () =>{
    return(
        <center>
            <div className="col-2">
                <Form>

  <br/>
  <a href="/login">
  <Button variant="primary"  style={{margin:"10px"}}>
    Loggin
  </Button>
  </a>
  <a href="/register">
  <Button variant="primary"  style={{margin:"10px"}}>
    SignUp
  </Button>
  </a>
  
  
</Form>
        </div>
        </center>
        
    
    );
}

export default form;