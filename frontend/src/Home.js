import React, { useEffect,useState } from 'react';
import {NavDropdown,Nav,Navbar,Form,Button,FormControl,Card, Container,Badge, Accordion } from 'react-bootstrap'
import MainScreen from './MainScreen';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Home = () =>{

   const [notes, setNotes] = useState([]);

   const deleteHandler = (id) => {
     if(Window.confirm("Are you Sure ?")){
         
     }
   };

  const fetchNotes=async() => {
    const { data }=await axios.get("/api/notes");
    console.log(data);
    setNotes(data);
  }

   useEffect(() => {
      
     fetchNotes();
     
   },[]);

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
                           <Accordion key={note._id}>
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
                                <p> Created On -data</p>
                                <span>Coppyright @ Hiruna</span>
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