import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl,Card } from 'react-bootstrap'



const cards = () =>{
    return(



<div className="container">
  <div className="row">
 
    <div className="col-4">
 <Card style={{ width: '18rem' }}>
 <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
     </div>

 
    <div className="col-4">
 <Card style={{ width: '18rem' }}>
 <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>  


    <div className="col-4">
 <Card style={{ width: '18rem' }}>
 <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>      

 



  
 
 </div></div>  


   
        
    
    );
}

export default cards;