import React from "react";

import Logo from "../../assets/logo.jpg";
import "./style.scss";
//============================================================================//

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="logo" />
      <div className="brand">
        <h1>Coronavirus Tracker 2019-2020</h1>
      </div>
    </div>
  )
};


export default Header;
