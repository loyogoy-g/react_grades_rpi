import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './status.css'
import Image from 'react-bootstrap/Image'



function Status(props) {
 
    return (
      <Modal show={props.allstatus}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="top"
      >
        <Modal.Body className='status'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8539fe23-126c-43b3-9c2b-b4d98b46af06/00-closed-large.png" />
            <Card.Body>
              <Card.Title>Notice ! !</Card.Title>
              <Card.Text>
                Vitual Card is not available.
              </Card.Text>
              <Button style={{width: '100%'}} href="https://portal.ramonpascualinstitute.com">Go Portal</Button>
            </Card.Body>
          </Card>      
        </Modal.Body>
      </Modal>
    );
  }

export default Status;