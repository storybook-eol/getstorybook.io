import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import Docs from './components/Docs';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Homepage} />
      <Route path="/docs" component={Docs} />
    </Router>
  ),
  document.getElementById('root')
);
