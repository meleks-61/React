import styled from 'styled-components';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Details from './components/Details';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import NotFound  from './components/NotFound';
// import './App.css';


const Container=styled.div`
text-align:center;`;


function App() {
  return (
    <Router>
    <Container>
    <Nav/>
    

    <Switch>

    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/details/:id" component={Details}/>
    <Route  component={NotFound}/>

    </Switch>
     
    


    </Container>
    </Router>
  );
}

export default App;
