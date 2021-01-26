import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from './components/form'

function App() {

  return (
    <Container className="container">
      <Row className="justify-content-md-center">
      <Col><Form /></Col>
      </Row>
    </Container>
    
    );
}

export default App;
