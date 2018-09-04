import React, { Component } from 'react';
import TextArea from '../../components/TextArea';

class CodePage extends Component {
  render() {
    return (
      <div className="App">
        <TextArea id={this.props.match.params.id} />
      </div>
    );
  }
}

export default CodePage;
