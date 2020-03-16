import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Feed from "./Feed";
import Submission from "./Submission";
import "./style.scss";
//============================================================================//

const Reviews = () => {
  const [showSubmission, setShowSubmission] = useState(false);
  return (
    <section className="reviews-container centered-content">
      <h1 className="header">Latest feedback</h1>
      <Feed />
      <div className="buttons-wrapper">
        <Button
          variant="primary"
          className="submit-new-button"
          onClick={() => setShowSubmission(!showSubmission)}
        >
          Share your experience
        </Button>
        {showSubmission && <Submission />}
      </div>
    </section>
  )
};


export default Reviews;
