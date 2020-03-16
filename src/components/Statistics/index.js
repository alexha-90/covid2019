import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";

import Table from "./Table";
import GeoChart from "./GeoChart";
// import LineGraph from "./LineGraph";

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
    <div className="counter-wrapper">
      As of <b>{displayDate}</b>, there are <b>{get(data, "confirmed", "-")}</b>&nbsp;
      cases of COVID-19 in the USA. Of that, <b>{get(data, "deaths", "-")}</b> have died and&nbsp;
      <b>{get(data, "recovered", "-")}</b> have recovered.
    </div>
  );
}

const Statistics = () => {
  useEffect(() => {
    (async function fetchData() {
      await fetch(US_STATISTICS_API)
        .then((response) => {
          // lazy catch but will work for this context
          if (response.status !== 200) {
            throw new Error(response.statusText)
          }
          return response.json();
        })
        .then(data => {
          setCounterData({
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            lastUpdate: data.lastUpdate
          });
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        });
    })()
  }, []);

  const [counterData, setCounterData] = useState({});
  const [error, setError] = useState(false);

  return (
    <section className="locator-container">
      {(isEmpty(counterData) || error) ? "" : displayCounterData(counterData)}
      <div className="content-wrapper">
        <Table results={mockStatistics}/>
        <div className="chart-wrapper">
          <GeoChart results={mockStatistics}/>
          {/*<LineGraph />*/}
          {/* temporary while better alternative to be found */}
          <div className="statistic-counter-img-container">
            <img
              alt="statistic-counter"
              src="https://covid19.mathdro.id/api/og"
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Statistics;
