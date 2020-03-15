import React from "react";
import Button from "react-bootstrap/Button";

import Feed from "./Feed";
import "./style.scss";
//============================================================================//

const Reviews = () => {
  return (
    <section className="reviews-container centered-content">
      <h1 className="header">Latest feedback</h1>
      <Feed />
      <div className="buttons-wrapper">
        <Button variant="primary" className="submit-new-button">
          Share your experience</Button>
      </div>
    </section>
  )
};


export default Reviews;