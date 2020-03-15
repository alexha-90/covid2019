import React from "react";
import GoogleMap from "./GoogleMap";
import ResultList from "./ResultList";

import "./style.scss";
//============================================================================//

const Locator = () => {
  return (
    <section className="locator-container">
      <h1 className="header">Information</h1>
      <div className="content-wrapper">
        <ResultList />
        <GoogleMap />
      </div>
    </section>
  )
};

export default Locator;
