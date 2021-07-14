import './App.css';
import Header from './Header';
import Form from './Form';
import Cards from './Home';
import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
   
      <Header/>
      <br/> <br/> <br/>
    
    <Route path="/" component={Form} exact/>
    <Route path="/home" component={Cards}/>
   
     

      
  
    </Router>
   
  );
}

export default App;
