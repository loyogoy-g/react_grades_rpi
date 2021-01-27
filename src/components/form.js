import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';
import {useEffect} from 'react'
import {useRef} from 'react'
import './form.css';
import axios from 'axios';
import DropDown from './Dropdown'
import AlertModal from './AlertError'
import Staus from './Status'
import Grades from './Grades'
import Status from './Status';

function Formgrades(prop) {

    const [allstatus, setallstatus] =  useState(false)

    const [lrn, setLrn] = useState(0)

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
            const res = response.data
            setSavedata(res)
            setGradeshow(true)
          })
          .catch(error => {
            console.log(error)})
        }


    const click = (e) =>{
      e.preventDefault()
      if (gradelevel == "Select One" || lrn.length != 12 || studentId.length < 1){
        setmodalstatus(true)
      }else{
        junior()
        console.log(savedata)
      }
    }

    useEffect(() => axios.post("http://127.0.0.1:8000/api/all/")
          .then((res) => res.data[0].Status? setallstatus(true): setallstatus(false))
  )


  return (
    <Form className="form">
      <Status allstatus={[allstatus, setallstatus] } />
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
