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
    axios
    .post(textPostEndpoint, e.target.value, {
      headers: { 'Content-Type': 'text/plain' }
    })
    .then(res => res)
    .catch((error) => {
      console.log(error);
    });
  }

  getData() {
    axios
    .get(textPostEndpoint)
    .then(res => this.setState({
      text: res.data,
    }))
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
