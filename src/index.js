import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>,
document.getElementById('app'));
