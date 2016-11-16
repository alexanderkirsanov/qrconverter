import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import QRResult from './components/QRResult';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/:text" component={QRResult}/>
      </Route>

  </Router>
,
  document.getElementById('root')
);
