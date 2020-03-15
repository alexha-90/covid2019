import React from "react";
import GoogleMapReact from 'google-map-react';

import "./style.scss";
//============================================================================//

const GoogleMap = () => {

  const center = {
    center: {
      lat: 37.09024,
      lng: -95.712891
    },
    zoom: 4
  };

  //   zoomLevels: {
  //   COUNTRY: 4,
  //     RESULT: {
  //     DEFAULT: 10,
  //       MIN: 7,
  //       MAX: 15
  //   }

  const AnyReactComponent = ({ text }) => <div>{text}</div>;


  return (
    <div className="google-map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBkoydkjU8ivjxIqRedfQPJSwnLcFW1OCw" }}
        defaultCenter={center.center}
        defaultZoom={center.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
};


export default GoogleMap;
