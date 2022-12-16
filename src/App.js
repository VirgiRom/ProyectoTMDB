import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom"
import Menu from './Componentes/Menu';
import Public from './Routes/Public';
import {Container} from 'react-bootstrap';
import React,{useState} from 'react'; /*={login}*/

function App() {
  const [login, setLogin]= useState(false)
  return (
    <Router>
      <Menu login/> 
      <Container>
      <Public setLogin={setLogin}/>  
      </Container>
    </Router>
  );
}

export default App;
