import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage';
import Docs from './containers/Docs';
import { Router, Route, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './lib/autolinker';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Homepage} />
      <Route path="/docs(/:sectionId/:itemId)" component={Docs} />

    </Router>
  ),
  document.getElementById('root')
);
