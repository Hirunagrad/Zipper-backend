import './App.css';
import Header from './Header';
import Form from './Form';
import Home from './Home'
import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
   
      <Header/>
      <br/> <br/> <br/>
    
    <Route path="/" component={Form} exact/>
    <Route path="/home" component={Home}/>
   
     

      
  
    </Router>
   
  );
}

export default App;
