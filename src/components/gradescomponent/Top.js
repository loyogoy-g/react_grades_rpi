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
        <td>{res.Data[0]}</td>
        <td>{res.Data[1]}</td>
      </tr>)
    
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
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
  
  export default Top;
  








