import './App.css';
import Header from './Header';
import Form from './Form';
import Home from './Home'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import loggins from './loggins';
import registers from './registers';



function App() {
  return (
    <Router>
   
      <Header/>
      <br/> <br/> <br/>
    
    <Route path="/" component={Form} exact/>
    <Route path="/login" component={loggins}/>
    <Route path="/register" component={registers}/>
    <Route path="/home" component={Home}/>
   
   
     

      
  
    </Router>
   
  );
}

export default App;
