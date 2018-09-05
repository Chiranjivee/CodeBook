import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import CodePage from './CodePage';
import OauthPage from './OauthPage';
import DistractionFreeCodePage from './DistractionFreeCodePage';

class Pages extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/oauth" component={OauthPage} />
          <Route path="/:id/code" component={CodePage} />
          <Route path="/code" component={DistractionFreeCodePage} />
        </div>
      </Router>
    )
  }
}

export default Pages;
