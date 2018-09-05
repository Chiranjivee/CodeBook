import React, { Component } from 'react';
import axios from '../../axios';
import {Link} from "react-router-dom";

class OauthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  render() {
    return (
      <div>
        SIGN UP FORM
      </div>
    );
  }
}

export default OauthPage;
