import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Top from './gradescomponent/Top'


function Grades(props) {
   const [gradeshow, setGradeshow] = props.gradestatus
   const savedata = props.savedata

  return (
    <Modal show={gradeshow}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header>
      <Modal.Title>
      <p><strong>{savedata.Name}</strong></p>
        <p><span style={{fontSize: "1.4rem"}}>{savedata.Section}</span></p>
        
      </Modal.Title>
    </Modal.Header>
    <Modal.Body >
      <Top savedata={savedata}/>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={()=>{
        setGradeshow(false)
      console.log(savedata)}}>Close</Button>
    </Modal.Footer>
  </Modal>
    
    );
}

export default Grades;
