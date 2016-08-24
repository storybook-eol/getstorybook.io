import {stripIndent} from 'common-tags'

export default {
  id: "getting-started",
  title: "Getting Started",
  content: stripIndent`
    This is the Getting Started Content.
    Some great stuff.

    ~~~js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Homepage from './components/Homepage';
    import Docs from './containers/Docs';
    import { Router, Route, browserHistory } from 'react-router';
    import './index.css';

    ReactDOM.render(
      (
        <Router history={browserHistory}>
          <Route path="/" component={Homepage} />
          <Route path="/docs(/:sectionId/:itemId)" component={Docs} />

        </Router>
      ),
      document.getElementById('root')
    );
    ~~~

    Back to stuff:

    * aa = 10
  `
};
