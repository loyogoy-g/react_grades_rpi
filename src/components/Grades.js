import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Top from './gradescomponent/Top'


function Grades(props) {
   const [gradeshow, setGradeshow] = props.gradestatus
   const savedata = props.savedata

  return (
    <Modal show={gradeshow} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        <h4>{savedata.Name} <br></br> </h4>
        <h6>{savedata.Section}</h6>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Top savedata={savedata}/>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={()=>setGradeshow(false)}>Close</Button>
    </Modal.Footer>
  </Modal>
    
    );
}

export default Grades;
