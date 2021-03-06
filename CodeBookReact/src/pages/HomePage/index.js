import React, { Component } from 'react';
import axios from '../../axios';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

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
      window.location.href = `/${this.state.id}/code`;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="selection">
        <h1>Choose your type</h1>
        <div>
          <Button variant="outlined" component={Link} to="/code">
            No distraction
          </Button>
          <Button variant="outlined" onClick={e => this.getSessionID(e)}>
            Colab editor
          </Button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
