import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import CodePage from './CodePage';
import DistractionFreeCodePage from './DistractionFreeCodePage';

class Pages extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id/code" component={CodePage} />
          <Route path="/code" component={DistractionFreeCodePage} />
        </div>
      </Router>
    )
  }
}

export default Pages;
