import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl,Card} from 'react-bootstrap'



const cards = () =>{
    return(
        <center>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </center>
        
    
    );
}

export default cards;