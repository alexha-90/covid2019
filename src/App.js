import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { Switch, Route, Router } from "react-router";

import Header from "./components/Header";
import Headline from "./components/Headline";
import Footer from "./components/Footer";

import './App.scss';
//============================================================================//

const history = createHistory();

function App() {
  return (
    <div className="app-container">
      <Router history={history} >
        <Header />
        <Switch>
          <Headline />
          {/*<Route exact path="/" component={Header} />*/}
          <p>some text</p>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
