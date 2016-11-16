import React, { Component } from 'react';
import Input from './components/Input';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <Content className="page_login">
        <Layout
          className="mdl_layout"
          fixedHeader
          fixedTabs>
          <Content className="mdl_layout__content">
            <Input text={this.props.params.text}>
            </Input>
            <div className="mdl-layout-spacer"></div>
            {this.props.children}
          </Content>
        </Layout>
      </Content>
    )
  }
}

export default App;
