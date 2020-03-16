import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";

import { US_STATES } from "../../../constants/states";
import { NEW_REVIEW_FIELDS } from "../../../enums";
import "./style.scss";
//============================================================================//

/**
*
* @props:
*   newSubmissionInput {
*     initials: string,
*     age: string,
*     gender: string,
*     state: string,
*     tested: boolean,
*     text: string
*    }
*   onChange: (key, val) => void
*/

const Submission = (props) => {
  const { newSubmissionInput, onChange } = props;
  return (
    <div className="submission-container">

      <div className="initials-wrapper">
        <InputGroup.Prepend>
          <InputGroup.Text id="initials">Initials:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          maxLength={2}
          aria-label="initials"
          aria-describedby="initials"
        />

        <InputGroup className="submission-dropdown-inputgroup">
          <Dropdown
            className="submission-dropdown"
            onSelect={val => {onChange(NEW_REVIEW_FIELDS.AGE, val)}}>
            <Dropdown.Toggle variant="info">
              Age Group:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" eventKey={"16-24"}>16-24</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"25-34"}>25-34</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"45-54"}>45-54</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"65-74"}>65-74</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"75+"}>75+</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="submission-dropdown"
            onSelect={val => {console.log(val)}}>
            <Dropdown.Toggle variant="info">
              Gender:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" eventKey={"M"}>Male</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"F"}>Female</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"-"}>Other</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="submission-dropdown"
            onSelect={val => {console.log(val)}}>
            <Dropdown.Toggle variant="info">
              Tested:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" eventKey={true}>Yes</Dropdown.Item>
              <Dropdown.Item href="#" eventKey={false}>No</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={val => {console.log(val)}}>
            <Dropdown.Toggle variant="info">
              State:
            </Dropdown.Toggle>
            <Dropdown.Menu className="submission-state-dropdown">
              {US_STATES.map(state => {
                return (
                  <Dropdown.Item
                    href="#"
                    key={state[1]}
                    eventKey={state[1]}>{state[0]} ({state[1]})
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup>
      </div>

      <InputGroup className="submission-text-inputgroup">
        <InputGroup.Prepend>
          <InputGroup.Text>Description:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>

      <Button
        variant="success"
        className="submit-new-button"
        // onClick={() => setShowSubmission(!showSubmission)}
      >
        Submit
      </Button>
    </div>
  )
};


export default Submission;
