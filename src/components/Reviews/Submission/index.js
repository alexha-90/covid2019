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
          value={newSubmissionInput[NEW_REVIEW_FIELDS.INITIALS]}
          onChange={e => {
            onChange(NEW_REVIEW_FIELDS.INITIALS, (e.target.value).toUpperCase())}
          }
        />

        <InputGroup className="submission-dropdown-inputgroup">
          <Dropdown
            className="submission-dropdown"
            onSelect={val => {onChange(NEW_REVIEW_FIELDS.AGE, val)}}>
            <Dropdown.Toggle variant="info">
              Age Group:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" eventKey={"16-24"} active={newSubmissionInput[NEW_REVIEW_FIELDS.AGE] === "16-24"}>
                16-24
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"25-34"} active={newSubmissionInput[NEW_REVIEW_FIELDS.AGE] === "25-34"}>
                25-34
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"45-54"} active={newSubmissionInput[NEW_REVIEW_FIELDS.AGE] === "45-54"}>
                45-54
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"65-74"} active={newSubmissionInput[NEW_REVIEW_FIELDS.AGE] === "65-74"}>
                65-74
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"75+"} active={newSubmissionInput[NEW_REVIEW_FIELDS.AGE] === "75+"}>
                75+
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="submission-dropdown"
            onSelect={val => {onChange(NEW_REVIEW_FIELDS.GENDER, val)}}>
            <Dropdown.Toggle variant="info">
              Gender:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" eventKey={"M"} active={newSubmissionInput[NEW_REVIEW_FIELDS.GENDER] === "M"}>
                Male
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"F"} active={newSubmissionInput[NEW_REVIEW_FIELDS.GENDER] === "F"}>
                Female
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"-"} active={newSubmissionInput[NEW_REVIEW_FIELDS.GENDER] === "-"}>
                Other
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="submission-dropdown"
            onSelect={val => {onChange(NEW_REVIEW_FIELDS.TESTED, val)}}>
            <Dropdown.Toggle variant="info">
              Tested:
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" eventKey={"yes"} active={newSubmissionInput[NEW_REVIEW_FIELDS.TESTED] === "yes"}>
                Yes
              </Dropdown.Item>
              <Dropdown.Item href="#" eventKey={"no"} active={newSubmissionInput[NEW_REVIEW_FIELDS.TESTED] === "no"}>
                No
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            onSelect={val => {onChange(NEW_REVIEW_FIELDS.STATE, val)}}>
            <Dropdown.Toggle variant="info">
              State:
            </Dropdown.Toggle>
            <Dropdown.Menu className="submission-state-dropdown">
              {US_STATES.map(state => {
                return (
                  <Dropdown.Item
                    href="#"
                    key={state[1]}
                    eventKey={state[1]}
                    active={newSubmissionInput[NEW_REVIEW_FIELDS.STATE] === state[1]}
                  >
                    {state[0]} ({state[1]})
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
        <FormControl
          as="textarea"
          aria-label="With textarea"
          value={newSubmissionInput[NEW_REVIEW_FIELDS.DESCRIPTION]}
          onChange={e => {
            onChange(NEW_REVIEW_FIELDS.DESCRIPTION, e.target.value)}
          }
        />
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
