import React from "react";
import Table from "./Table";
import GeoChart from "./GeoChart";
import LineGraph from "./LineGraph";

import { mockStatistics } from "../../__mocks__";
import "./style.scss";
//============================================================================//

const Statistics = () => {
  return (
    <section className="locator-container">
      <h1 className="header">Test Tracker</h1>
      <p>
        As of 6:52pm EST, there are currently 2,564 cases of COVID-19 in the USA. Table below is displaying
        cases that have been accepted or rejected from testing
      </p>
      <div className="content-wrapper">
        <Table results={mockStatistics}/>
        <GeoChart results={mockStatistics}/>

        {/*<div className="chart-wrapper">*/}
          {/*<GeoChart results={results}/>*/}

        {/*</div>*/}
      </div>
    </section>
  )
};

export default Statistics;
