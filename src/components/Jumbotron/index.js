import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

import Carousel from "./Carousel";

import "./style.scss"
//============================================================================//

const JumbotronComponent = () => {
  return (
    <section className="jumbotron-container">
      <Jumbotron className="jumbotron">
        <h1>COVID 2019-2020</h1>
        <p>
          The first step to mitigation is understanding.
          Find and read reviews of COVID-19 testing centers near you...
        </p>
        <Carousel />
      </Jumbotron>
    </section>
  )
};


export default JumbotronComponent;
