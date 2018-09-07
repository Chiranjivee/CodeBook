import React, { Component } from 'react';
import TextArea from '../../components/TextArea';
import style from './style.scss';

class CodePage extends Component {
  render() {
    return (
      <div className={style.App}>
        <TextArea id={this.props.match.params.id} />
      </div>
    );
  }
}

export default CodePage;
