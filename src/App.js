import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { Switch, Route, Router } from "react-router";

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Statistics from "./components/Statistics";
import ReviewFeed from "./components/ReviewFeed";
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
          <Jumbotron />
          <Statistics />
          <ReviewFeed />
        {/*</Switch>*/}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
