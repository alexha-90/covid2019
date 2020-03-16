import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Feed from "./Feed";
import Submission from "./Submission";

import { NEW_REVIEW_FIELDS } from "../../enums";
import "./style.scss";
//============================================================================//

const Reviews = () => {

  // to uppercase. Add dot

  const [showNewSubmissionBtn, setShowNewSubmissionBtn] = useState(false);
  const [newSubmissionInput, setNewSubmissionInput] = useState({
    [NEW_REVIEW_FIELDS.INITIALS]: "",
    [NEW_REVIEW_FIELDS.AGE]: "",
    [NEW_REVIEW_FIELDS.GENDER]: "",
    [NEW_REVIEW_FIELDS.STATE]: "",
    [NEW_REVIEW_FIELDS.TESTED]: false,
    [NEW_REVIEW_FIELDS.DESCRIPTION]: ""
  });

  const handleOnChangeInput = (key, value) => {
    console.log('in handleOnChangeInput')
    console.log(key, value)
  };

  return (
    <section className="reviews-container centered-content">
      <h1 className="header">Latest feedback</h1>
      <Feed />
      <div className="buttons-wrapper">
        <Button
          variant="primary"
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
