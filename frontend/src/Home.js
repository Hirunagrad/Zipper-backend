import React from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl,Card, Container,Badge, Accordion } from 'react-bootstrap'
import MainScreen from './MainScreen';
import { Link } from 'react-router-dom';
import notes from './data/notes';
import { right } from '@popperjs/core';




const Home = () =>{

   const deleteHandler = (id) => {
     if(Window.confirm("Are you Sure ?")){
         
     }
   }

    return(
      <Container>
              <div>

                    <h1>Welcome..</h1>
                    <MainScreen/>
                    <Link to="createnote">
                       <Button>Create New Note</Button>
                    </Link>
                    <br/><br/>
                    {
                      notes.map((note)=>(
                           <Accordion>
                               <Card style={{margin: 10}}>
                        <Card.Header style={{display:'flex'}}>
                          <h5>
                            
                            {note.title}</h5>
                          <div className=""  >
                          <Button className="mx-2 left" href={`notes/${note._id}`} >Edit</Button>
                          <Button variant="danger"type="button" onClick={()=> deleteHandler(note._id)}>Delete</Button>
                          </div>
                         
            
    
                        </Card.Header>
                        <Card.Body>
                        <span variant="Success">Category - {note.category}</span>
                        <blockquote className="blockquote mb-0">
                                <p>
                                 {note.content}
                                </p><br/>
                                <footer className="blockquote-footer">
                                 Created On -data
                                </footer>
                              </blockquote>
                        </Card.Body>
                      </Card>
                           </Accordion>
                      

                      ))
                    }
                  
                    
                     
                     

              </div>
      </Container>

   
   
        
    
    );
}

export default Home;