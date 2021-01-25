import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function AlertModal(props) {

    const [modalstatus, setmodalstatus] = props.modalstatus

    return (
      <Modal show={modalstatus}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            AN ERROR OCCURED !!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert variant="primary">Please Check your Entries</Alert>
          <Alert variant="danger">
            LRN must be 12 digit number<br></br>
        </Alert>
        <Alert variant="danger">
            Please Select a Level<br></br>
        </Alert>        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setmodalstatus(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AlertModal;