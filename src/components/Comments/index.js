import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Feed from "./Feed";
import Submission from "./Submission";

import { NEW_COMMENT_FIELDS } from "../../enums";
import "./style.scss";
//============================================================================//

const Reviews = () => {
  const [showNewSubmissionBtn, setShowNewSubmissionBtn] = useState(false);
  const [newSubmissionInput, setNewSubmissionInput] = useState({
    [NEW_COMMENT_FIELDS.INITIALS]: "",
    [NEW_COMMENT_FIELDS.AGE]: "",
    [NEW_COMMENT_FIELDS.GENDER]: "",
    [NEW_COMMENT_FIELDS.STATE]: "",
    [NEW_COMMENT_FIELDS.TESTED]: "",
    [NEW_COMMENT_FIELDS.DESCRIPTION]: ""
  });

  const handleOnChangeInput = (key, value) => {
    setNewSubmissionInput({
      ...newSubmissionInput,
      [key]: value
    });
  };

  console.log(newSubmissionInput);

  return (
    <section className="comments-container centered-content">
      <h1 className="header">Latest comments</h1>
      <Feed />
      <div className="buttons-wrapper">
        <Button
          variant="secondary"
          className="share-experience-button"
          onClick={() => setShowNewSubmissionBtn(!showNewSubmissionBtn)}
        >
          Share your experience
        </Button>
        {showNewSubmissionBtn &&
          <Submission
            newSubmissionInput={newSubmissionInput}
            onChange={(key, val) => handleOnChangeInput(key, val)}
        />}
      </div>
    </section>
  )
};


export default Reviews;
