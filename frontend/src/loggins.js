import React, { useState } from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl} from 'react-bootstrap'
import axios from 'axios';



const Loggins = () =>{

  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const submitHandler = async (e) => {
 
    e.preventDefault();
     //console.log(email,password);

     try{

      const config = {
      
        headers: {
          "Content-type" : "application/json"
        }
 
     }
      setLoading(true)
      
      const { data } = await axios.post('/api/users/login',
      {
          email,
          password,
      },
      config
      );
      
      console.log(data);
      localStorage.setItem('userInfo',JSON.stringify(data));
      setLoading(false)

     }catch(error){

       setError(error.response.data.message);
         
     }

  }

    return(

         <center>
             <h1>Sign in</h1>
            <div className="col-2">
                <Form onSubmit={submitHandler}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}  />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
  <br/>

   <p>Don't have an Account <a href="/register">Sign Up</a></p>

  <a href="/login">
  <Button variant="primary"  style={{margin:"10px"}} type="submit">
    Loggin
  </Button>
  </a>
 
  
</Form>
        </div>
        </center>
        
    
    );
}

export default Loggins;
