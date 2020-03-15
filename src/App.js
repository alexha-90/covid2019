import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { Switch, Route, Router } from "react-router";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import News from "./components/News";
import Footer from "./components/Footer";

import './App.scss';
//============================================================================//

const history = createHistory();

function App() {
  return (
    <div className="app-container">
      <Router history={history} >
        <Header />
        {/*<Switch>*/}
          {/*<Route exact path="/" component={Header} />*/}
          {/*pass props here*/}
          {/*<Jumbotron />*/}
          <Statistics />
          <Reviews />
          <hr />
          <News />
        {/*</Switch>*/}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
