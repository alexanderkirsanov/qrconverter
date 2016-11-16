import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import {Textfield} from 'react-mdl';
class URLInput extends Component {
  constructor(props) {
    super(props);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }
  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      browserHistory.push(`/${encodeURIComponent(e.target.value)}`)
    }
    return true;
  }
  render(){
    return (
      <Textfield
        onKeyPress={this._handleKeyPress}
        defaultValue={this.props.text}
        label="Link to resource"
        style={{minWidth: '200px', width: '400px', maxWidth: '400px'}}
    />
    )
  };
}
export default URLInput;
