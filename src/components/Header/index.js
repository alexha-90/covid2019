import React from "react";

import Logo from "../../assets/corona_virus_logo.png";
import "./style.scss";
//============================================================================//

const Header = () => {
  return (
    <section className="header-container">
      <img src={Logo} alt="logo" />
      <div className="brand">
        <h1>Coronavirus (COVID-19) Test Tracker</h1>
      </div>
    </section>
  )
};


export default Header;
