import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Feed from "./Feed";
import Submission from "./Submission";

import { NEW_REVIEW_FIELDS } from "../../enums";
import "./style.scss";
//============================================================================//

const Reviews = () => {
  const [showNewSubmissionBtn, setShowNewSubmissionBtn] = useState(false);
  const [newSubmissionInput, setNewSubmissionInput] = useState({
    [NEW_REVIEW_FIELDS.INITIALS]: "",
    [NEW_REVIEW_FIELDS.AGE]: "",
    [NEW_REVIEW_FIELDS.GENDER]: "",
    [NEW_REVIEW_FIELDS.STATE]: "",
    [NEW_REVIEW_FIELDS.TESTED]: "",
    [NEW_REVIEW_FIELDS.DESCRIPTION]: ""
  });

  const handleOnChangeInput = (key, value) => {
    setNewSubmissionInput({
      ...newSubmissionInput,
      [key]: value
    });
  };

  console.log(newSubmissionInput);

  return (
    <section className="reviews-container centered-content">
      <h1 className="header">Latest feedback</h1>
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
