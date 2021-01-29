import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';
import {useEffect} from 'react'
import {useRef} from 'react'
import './form.css';
import axios from 'axios';
import DropDown from './Dropdown'
import AlertModal from './AlertError'
import Status from './Status'
import Grades from './Grades'
import { MdAccountCircle } from "react-icons/md";
import { MdDvr } from "react-icons/md";
import { TiWarning } from "react-icons/ti";

function Formgrades(prop) {

    const [allstatus, setallstatus] = useState(false)

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
          await axios.post('https://gilbertloyogoy.tk/api/v2/'
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

    useEffect(() => axios.post("https://gilbertloyogoy.tk/api/all/")
          .then((res) => {
            setallstatus(res.data[0].Status) 
            console.log(res.data[0].Status)
            console.log(modalstatus, setmodalstatus)}
  ))


  return (
    <Form className="form">
      <p style={{fontSize: "1.4rem", textAlign:"center" }}><strong>RAMON PASCUAL INSTITUTE</strong></p>
    <Grades gradestatus={[gradeshow, setGradeshow]} savedata={savedata}/>
    <AlertModal modalstatus={[modalstatus, setmodalstatus]} />
    <Form.Group controlId="formBasicEmail">
      <Form.Label><MdDvr/>  LRN</Form.Label>
      <Form.Control onChange={lrnonchange} type="text" placeholder="Enter your LRN" />
      <Form.Text  className="text-muted">
        <p style={{color:"yellow"}}><TiWarning />  Please do not share your LRN and Student ID.</p>
      </Form.Text>
    </Form.Group>
  
    <Form.Group>
      <Form.Label><MdAccountCircle/>  Student ID</Form.Label>
      <Form.Control onChange={(studid)=>setStudentId(studid.target.value)} type="text" placeholder="Student ID" />
    </Form.Group>
    <Form.Group>
      <DropDown gradelevel={gradelevel} setGradelevel={setGradelevel}/>
    
    </Form.Group>
    
    <Button onClick={click} variant="primary" type="submit">
      Submit
    </Button>
    <Status allstatus={allstatus} />
  </Form>
  );
}

export default Formgrades;
