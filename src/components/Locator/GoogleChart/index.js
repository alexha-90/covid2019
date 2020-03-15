import React from "react";
import { Chart } from "react-google-charts";

import "./style.scss";
//============================================================================//

/**
 *
 * @props results { Array<stateName: string, yesCount: number, noCount: number>}
 */

const GoogleChart = (props) => {
  return (
    <div className="google-chart-container">
      <Chart
        chartType="GeoChart"
        height="1120px"
        width="100%"
        data={props.results}
        options={{
          region: 'US',
          displayMode: 'regions',
          resolution: 'provinces',
          colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
          backgroundColor: '#81d4fa',
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
        }}
        mapsApiKey="AIzaSyBkoydkjU8ivjxIqRedfQPJSwnLcFW1OCw"
        rootProps={{ 'data-testid': '4' }}
      />
    </div>
  )
};


export default GoogleChart;
