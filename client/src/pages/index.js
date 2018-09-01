import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './HomePage';
import CodePage from './CodePage';

class Pages extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/distraction-free-code-editor/client/build/" component={HomePage} />
          <Route exact path="/distraction-free-code-editor/client/build/:id" component={CodePage} />
        </div>
      </Router>
    )
  }
}

export default Pages;
