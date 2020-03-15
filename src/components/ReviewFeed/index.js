import React from "react";
import get from "lodash/get";

import { mockReviews } from "../../__mocks__/reviews";
import "./style.scss";
//============================================================================//

const ReviewFeed = (props) => {
  const reviews = props.reviews || mockReviews;
  return (
    <section className="review-feed-container">
      <h1 className="header">Latest feedback</h1>
      <ul>
        {reviews.map(review => {
          const iteratorKey = get(review, "initials", "") + get(review, "timeStamp", "");
          const receivedTest = get(review, "tested", "");
          return (
            <li key={iteratorKey}>
              <div className={receivedTest ? "tested-yes" : "tested-no"}>
                {/*<div className="user-info">*/}
                {/*</div>*/}
                {get(review, "initials", "")}
                {get(review, "timeStamp", "")}
                {get(review, "age", "")}
                {get(review, "gender", "")}
                {get(review, "state", "")}
                {receivedTest ? "Yes" : "No"}
                {get(review, "description", "")}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
};


export default ReviewFeed;
