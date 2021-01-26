import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';
import {useEffect} from 'react'
import {useRef} from 'react'
import './form.css';
import axios from 'axios';
import DropDown from './Dropdown'
import AlertModal from './AlertError'
import Grades from './Grades'

function Formgrades(prop) {

    const [lrn, setLrn] = useState(0)

    const mountedRef = useRef(true)

    const [gradeshow, setGradeshow] = useState(false)

    const [savedata, setSavedata] = useState(0)

    const lrnonchange = (e) =>{
      setLrn(e.target.value)
      console.log(e.target.value)
    }

    const [studentId, setStudentId] = useState(0)

    const [modalstatus, setmodalstatus] = useState(false)

    const [gradelevel, setGradelevel] = useState("Select One")

    const junior = async() =>{
          await axios.post('http://127.0.0.1:8000/api/v2/'
          , {"lrn":lrn, "level": gradelevel, "student_id": studentId})
          .then(response => {
            if (!mountedRef.current) return null
            const res = response.data
            setSavedata(res)
          })
          .catch(error => {
            console.log(error)})
        }

        useEffect(() => {
          return () => { 
            mountedRef.current = false
          }
        }, [])

    const click = (e) =>{
      e.preventDefault()
      if (gradelevel == "Select One" || lrn.length != 12 || studentId.length < 1){
        setmodalstatus(true)
      }else{
        junior()
        setGradeshow(true)
        console.log(savedata)
      }
    }

  return (
    <Form className="form">
    <Grades gradestatus={[gradeshow, setGradeshow]} savedata={savedata}/>
    <AlertModal modalstatus={[modalstatus, setmodalstatus]} />

    <Form.Group controlId="formBasicEmail">
      <Form.Label>LRN</Form.Label>
      <Form.Control onChange={lrnonchange} type="text" placeholder="Enter your LRN" />
      <Form.Text className="text-muted">
        Please do not share your LRN and Student ID.
      </Form.Text>
    </Form.Group>
  
    <Form.Group>
      <Form.Label>Student ID</Form.Label>
      <Form.Control onChange={(studid)=>setStudentId(studid.target.value)} type="text" placeholder="Student ID" />
    </Form.Group>
    <Form.Group>
      
      <DropDown gradelevel={gradelevel} setGradelevel={setGradelevel}/>
    
    </Form.Group>
    
    <Button onClick={click} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export default Formgrades;
