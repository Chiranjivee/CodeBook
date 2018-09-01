import React, { Component } from 'react';
import loaderImage from './loader.svg';
import axios from '../../axios';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  getSessionID() {
    axios
    .get(`/editor/createNewSession`)
    .then(res => {
      this.setState({
        id: res.data,
      });
      window.location.href = `/${this.state.id}`;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    if (this.state.id === 0)
      this.getSessionID();
  }

  render() {
    return (
      <div className="Loader">
        <img src={loaderImage} alt="Loader" />
      </div>
    );
  }
}

export default LandingPage;
