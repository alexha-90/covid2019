import React from "react";
import { Chart } from "react-google-charts";

import { mockDailyStatistics } from "../../../__mocks__/statistics";
import "./style.scss";
//============================================================================//

const LineGraph = () => {
  return (
    <div className="line-graph-container">
      <Chart
        width={'100%'}
        height={'inherit'}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={mockDailyStatistics}
        options={{
          chart: {
            title: 'Accepted vs. total requested COVID-19 tests',
          },
        }}
        rootProps={{ 'data-testid': '3' }}
      />
    </div>
  )
};


export default LineGraph;
