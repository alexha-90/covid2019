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
                <div className="user-info">
                  <ul>
                    <li>{get(review, "initials", "")}</li>
                    <li>Age: {get(review, "age", "")}</li>
                    <li>Gender: {get(review, "gender", "")}</li>
                  </ul>

                </div>
                <div className="description">
                  {get(review, "description", "")}
                </div>

                {/*{get(review, "timeStamp", "")}*/}
                {/*{get(review, "state", "")}*/}
                {/*{receivedTest ? "Yes" : "No"}*/}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
};


export default ReviewFeed;
