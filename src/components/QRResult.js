import QRCode from 'react-qr';
import React, { Component } from 'react';

class QRResult extends Component {
  render(){
    return (
      <div className="react-qr-wrapper">
      <QRCode text={decodeURIComponent(this.props.params.text)}/>
      </div>
    )
  }
};
export default QRResult;
