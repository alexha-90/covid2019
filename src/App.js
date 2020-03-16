import React from 'react';

import Header from "./components/Header";
import Statistics from "./components/Statistics";
import Reviews from "./components/Reviews";
import News from "./components/News";
import Footer from "./components/Footer";

import './App.scss';
//============================================================================//

/*
// unused. Should be considered as/if app grows in complexity

import createHistory from 'history/createBrowserHistory'
import { Switch, Route, Router } from "react-router";
import Jumbotron from "./components/Jumbotron";

const history = createHistory();
<Router history={history} >
  <Switch>
    <Route exact path="/" component={Header} />
    pass props here
    <Jumbotron />
  </Switch>
</Router>
*/


function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Statistics />
        <Reviews />
        <hr />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
