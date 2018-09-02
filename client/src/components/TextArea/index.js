import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import axios from '../../axios';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : '',
      id: this.props.id,
    };
    this.doGet = true;
  }

  sendRequest (text) {
    this.doGet = false;
    this.setState({text: text});
    this.sendRequestUtil(text);
  };

  sendRequestUtil = debounce(async (text) => {
    axios
    .post(`/editor/${this.state.id}/code`, text, {
      headers: { 'Content-Type': 'text/plain' }
    })
    .then(res => this.doGet = true)
    .catch((error) => {
      console.log(error);
    });
  },200);

  getData() {
    if (this.doGet)
      axios
      .get(`/editor/${this.state.id}/code`)
      .then(res => this.setState({
        text: res.data,
      }))
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.interval = setInterval(() =>  this.getData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <textarea
          className="fullscreen"
          value={this.state.text}
          onChange={e => this.sendRequest(e.target.value)}
          placeholder="Type your code here. Happy Coding :)"
        />
    );
  }
}

export default TextArea;
