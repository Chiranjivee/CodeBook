import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import CodePage from './CodePage';

class Pages extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={CodePage} />
        </div>
      </Router>
    )
  }
}

export default Pages;
