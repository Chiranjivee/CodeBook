import React, { Component } from 'react';
import style from './style.scss';

class DistractionFreeCodePage extends Component {
  render() {
    return (
      <div className={style.App}>
        <textarea
          className={style.fullScreen}
          placeholder="Type your code here."
        />
      </div>
    );
  }
}

export default DistractionFreeCodePage;
