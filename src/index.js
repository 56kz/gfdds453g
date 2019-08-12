import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';

ReactDOM.render(
  <App >
  <Router history={hashHistory}>
    <Route path="/" component={Page1} />
    <Route path="/1" component={Page1} />
    <Route path="/2" component={Page2} />
    <Route path="/*" component={NotFound} />
  </Router>

  </App>,
  document.getElementById('root')
);
