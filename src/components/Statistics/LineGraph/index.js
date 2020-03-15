import React from "react";
import { Chart } from "react-google-charts";

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
        data={[
          [
            'Date',
            'Percentage',
          ],
          ["3/14", 25.4],
          ["3/15", 30.9],
          ["3/16", 57],
        ]}
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
