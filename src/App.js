import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from './components/form'
import DropDown from './components/Dropdown'
import {useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';
import ParticlesBg from 'particles-bg'

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
      <Row className="justify-content-md-center">
      <Col><Form see={click}/></Col>
      </Row>
      <ParticlesBg type="circle" bg={true} />
    </Container>
    
    );
}

export default App;
