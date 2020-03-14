import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./style.scss"
//============================================================================//

const Headline = () => {
  return (
    <Jumbotron className="headline-container">
      <h1>COVID 2019-2020</h1>
      <p>
        The first step to mitigation is understanding.
        Find and read reviews of COVID-19 testing centers near you...
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
};


export default Headline;
