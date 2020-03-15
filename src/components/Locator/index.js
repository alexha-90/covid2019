import React from "react";
import GoogleChart from "./GoogleChart";
import ResultTable from "./ResultTable";

import "./style.scss";
//============================================================================//

const Locator = () => {
  const results = [
    ['State', 'Accepted', 'Rejected'],
    ['AL', 0, 0],
    ['AK', 0, 0],
    ['AR', 0, 0],
    ['AK', 0, 0],
    ['AZ', 0, 0],
    ['CA', 5, 0],
    ['CO', 6, 72],
    ['DE', 0, 0],
    ['FL', 0, 0],
    ['HI', 53, 0],
    ['ID', 24, 0],
    ['KS', 0, 0],
    ['KY', 0, 0],
    ['MI', 0, 0],
    ['MO', 0, 0],
    ['MS', 22, 0],
    ['MT', 0, 0],
    ['NE', 0, 0],
    ['NV', 0, 0],
    ['NJ', 0, 0],
    ['NM', 0, 0],
    ['NY', 0, 0],
    ['OR', 0, 0],
    ['PA', 35, 0],
    ['TX', 0, 0],
    ['UT', 0, 0],
    ['VA', 0, 0],
    ['WA', 0, 0],
    ['WV', 0, 0],
    ['WY', 0, 0],
  ];


  return (
    <section className="locator-container">
      <h1 className="header">Test Tracker</h1>
      <p>
        As of 6:52pm EST, there are currently 2,564 cases of COVID-19 in the USA. Table below is displaying
        cases that have been accepted or rejected from testing
      </p>
      <div className="content-wrapper">
        <ResultTable results={results}/>
        <GoogleChart results={results}/>
      </div>
    </section>
  )
};

export default Locator;
