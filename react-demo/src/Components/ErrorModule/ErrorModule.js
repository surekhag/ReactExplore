import React, { Component } from 'react';
import './ErrorModule.scss';

class errorModule extends Component {
  handleModalClose = event => {
    this.props.closeModule();
  };

  render() {
    return (
      <div
        className="errMsgContainer"
        id="errorModal"
        style={{ display: this.props.show }}
      >
        <p className="errorMsg">{this.props.message} </p>
        <span className="close" onClick={this.handleModalClose}>
          X
        </span>
      </div>
    );
  }
}
export default errorModule;
