import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { TiWarning } from "react-icons/ti";

function AlertModal(props) {

    const [modalstatus, setmodalstatus] = props.modalstatus

    return (
      <Modal show={modalstatus}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            AN ERROR OCCURED !!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p style={{fontSize: "1.4rem", }}><TiWarning/> LRN must be 12 digit number</p><br></br>
        
             <p style={{fontSize: "1.4rem"}}><TiWarning/> Please Select a Level</p> <br></br>   
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setmodalstatus(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AlertModal;