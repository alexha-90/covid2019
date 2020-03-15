import React from "react";
import get from "lodash/get";

import Pagination from "./Pagination/index";

import { mockReviews } from "../../../__mocks__/reviews";
import "./style.scss";
//============================================================================//

const Feed = (props) => {
  const reviews = props.reviews || mockReviews;
  return (
    <div className="feed-container">
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
                  <div className="top-bar">
                      <div>Tested: {receivedTest ? "Yes" : "No"}</div>
                      <div>State: {get(review, "state", "")}</div>
                      <div>{get(review, "timeStamp", "")}</div>
                  </div>
                  <div className="text">
                    {get(review, "text", "")}
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <Pagination />
    </div>
  )
};


export default Feed;
