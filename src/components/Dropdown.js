import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown(props) {

    const level = props.level



    const select = (e) => {
        props.setGradelevel(e)
    }

  return (
    <DropdownButton onSelect={select} id="dropdown-basic-button" variant="success" title={props.gradelevel}>
        <Dropdown.Item eventKey="JuniorHigh">Junior High School</Dropdown.Item>
        <Dropdown.Item eventKey="SeniorHigh">Senior High School</Dropdown.Item>
    </DropdownButton>
    );
}

export default DropDown;
