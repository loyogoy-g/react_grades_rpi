import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'


function Top(props) {

    const data = props.savedata

    const grades = data.data


    const table = 
        grades.map((res) => 
        <tr>
        <td>{res.Subject}</td>
        <td>{(res.Subject.toLowerCase()).includes("average")? res.Data[0]: ~~res.Data[0]}</td>
        <td>{(res.Subject.toLowerCase()).includes("average")? res.Data[1]: ~~res.Data[1]}</td>
      </tr>)

    const seniortable = 
    grades.map((res) => 
    <tr>
    <td style={{fontSize: "1.2rem"}}>{res.Subject}</td>
    <td>{(res.Subject.toLowerCase()).includes("average")? res.Data[0]: ~~res.Data[0]}</td>
    <td>{(res.Subject.toLowerCase()).includes("average")? res.Data[1]: ~~res.Data[1]}</td>
    <td>{((parseFloat(res.Data[1]) + parseFloat(res.Data[0]))/2).toFixed(2)}</td>
    </tr>)



    if (data.Section.includes(11) || data.Section.includes(12)){
      return (<Table striped bordered hover>
        <thead>
          <tr>
            <th>Learning Areas</th>
            <th>First Quarter</th>
            <th>Second Quarter</th>
            <th>Final Grade</th>
          </tr>
        </thead>
        <tbody>
          {seniortable}
        </tbody>
      </Table>)
    }else{
      return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Learning Areas</th>
            <th>First Quarter</th>
            <th>Second Quarter</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </Table>
      );
    }
    
  }
  
  export default Top;
  








