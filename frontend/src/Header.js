import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

//<Link to="/">Form</Link>
     // <Link to="/home">Home</Link>

const Header = () =>{
    return(
      <div className="" >
        <Navbar bg="light" expand="lg">
 
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    
      <Nav.Link href="/">Form</Nav.Link>
      <Nav.Link href="/home">Home</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
      </div>

    );
}

export default Header;