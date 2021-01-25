import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from './components/form'
import DropDown from './components/Dropdown'
import {useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';

function App() {
  const [isClick, setIsClick] = useState(true)

  const click = () =>{
    setIsClick(false)
  }

  useEffect(() =>{
  axios.post('http://127.0.0.1:8000/api/student/'
  , {"lrn": "1201948"})
  .then(response => console.log(response.data))})
    

  return (
    <Container className="container">
      <Col><Form see={click}/></Col>
    </Container>
    );
}

export default App;
