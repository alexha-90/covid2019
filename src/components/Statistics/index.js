import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import Table from "./Table";
import GeoChart from "./GeoChart";
import LineGraph from "./LineGraph";

import {US_STATISTICS_API} from "../../api/endpoints";
import { mockStatistics } from "../../__mocks__/statistics";
import { easternTimeZoneFormatter } from "../../util";
import "./style.scss";
//============================================================================//

function displayCounterData(data) {
  let displayDate = "-";
  if (data.lastUpdate) {
    displayDate = easternTimeZoneFormatter(data.lastUpdate);
  }
  return (
    <p>
      As of <b>{displayDate}</b>, there are currently
      <b>{get(data, "confirmed", "-")}</b> cases of COVID-19 in the USA. Of
      that, <b>{get(data, "deaths", "-")}</b> have died and&nbsp;
      <b>{get(data, "recovered", "-")}</b> have recovered. The data below
      displays cases that have been accepted or rejected from testing.
    </p>
  );
}

const Statistics = () => {
  useEffect(() => {
    fetch(US_STATISTICS_API)
      .then((response) => {
        // lazy catch but will work for this context
        if (response.status !== 200) {
          throw new Error(response.statusText)
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setCounterData({
          confirmed: data.confirmed.value,
          recovered: data.recovered.value,
          deaths: data.deaths.value,
          lastUpdate: data.lastUpdate
        });
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const [counterData, setCounterData] = useState({});
  const [error, setError] = useState(false);

  const { confirmed, recovered, deaths, timeStamp } = counterData;

  return (
    <section className="locator-container">
      <h1 className="header">Test Tracker</h1>
      {(isEmpty(counterData) || error) ? "" : displayCounterData(counterData)}
      <div className="content-wrapper">
        <Table results={mockStatistics}/>
        <div className="chart-wrapper">
          <GeoChart results={mockStatistics}/>
          <LineGraph />
        </div>
      </div>
    </section>
  )
};

export default Statistics;
