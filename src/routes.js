import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

export default Routes;
