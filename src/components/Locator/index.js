import React from "react";
import GoogleChart from "./GoogleChart";
import ResultTable from "./ResultTable";

import "./style.scss";
//============================================================================//

const Locator = () => {
  const results = [
    ['State', 'Accepted', 'Rejected'],
    ["AK", 0, 0],
    ["AL", 0, 0],
    ["AR", 0, 0],
    ["AZ", 0, 0],
    ["CA", 0, 0],
    ["CO", 0, 0],
    ["CT", 0, 0],
    ["DC", 0, 0],
    ["DE", 0, 0],
    ["FL", 23, 5],
    ["GA", 0, 0],
    ["HI", 75, 25],
    ["IA", 0, 0],
    ["ID", 0, 0],
    ["IL", 0, 0],
    ["IN", 0, 0],
    ["KS", 0, 0],
    ["KY", 0, 0],
    ["LA", 0, 0],
    ["MA", 0, 0],
    ["MD", 0, 0],
    ["ME", 0, 0],
    ["MI", 0, 0],
    ["MN", 34, 0],
    ["MO", 0, 0],
    ["MS", 0, 0],
    ["MT", 0, 0],
    ["NC", 0, 0],
    ["ND", 0, 0],
    ["NE", 0, 0],
    ["NH", 0, 0],
    ["NJ", 0, 0],
    ["NM", 0, 0],
    ["NV", 0, 0],
    ["NY", 0, 0],
    ["OH", 0, 0],
    ["OK", 0, 0],
    ["OR", 0, 0],
    ["PA", 0, 0],
    ["RI", 0, 0],
    ["SC", 0, 0],
    ["SD", 0, 0],
    ["TN", 0, 0],
    ["TX", 0, 0],
    ["UT", 25, 50],
    ["VT", 0, 0],
    ["VA", 75, 100],
    ["WA", 0, 0],
    ["WI", 0, 0],
    ["WV", 99, 0],
    ["WY", 0, 0]
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
