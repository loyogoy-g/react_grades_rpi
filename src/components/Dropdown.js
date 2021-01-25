import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useState} from 'react';


function DropDown(props) {

    const select = (e) => {
        props.setGradelevel(e)
    }

  return (
    <DropdownButton onSelect={select} id="dropdown-basic-button" variant="info" title={props.gradelevel}>
        <Dropdown.Item eventKey="JuniorHigh">Junior High School</Dropdown.Item>
        <Dropdown.Item eventKey="SeniorHigh">Senior High School</Dropdown.Item>
    </DropdownButton>
    );
}

export default DropDown;
