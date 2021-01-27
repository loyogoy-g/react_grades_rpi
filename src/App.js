import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from './components/form';
import useEffect from 'react'
import useState from 'react'
import axios from 'axios'
import ParticlesBg from 'particles-bg'
import logo from './logo.png';
import icon from "./icon";


function App() {
  let config = {
    num: [4, 7],
    rps: 0.5,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [.1, 0.9],
    body: icon,
    position: "all",
    //color: ["random", "#ff0000"],
    cross: "dead",
    random: 30
  };
  return (
    <Container className="container">
      <ParticlesBg type="custom" config={config} bg={true} />
      <Row className="justify-content-md-center">
      <Col><Form /></Col>
      </Row>
    </Container>
    
    );
}

export default App;
