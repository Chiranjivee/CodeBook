import React, { Component } from 'react';
import axios from '../../axios';
import {textPostEndpoint} from '../../config/settings';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : '',
    };
  }
  sendRequest(e) {
    this.setState({text: e.target.value});
    console.log(this.state.text);
    axios
    .post(textPostEndpoint,{
      body: this.state.text,
    })
    .then(res => this.setState({text: res.data}))
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
        <textarea
          className="fullscreen"
          value={this.state.text}
          onChange={e => this.sendRequest(e)}
        />
    );
  }
}

export default TextArea;
