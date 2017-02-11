import React from 'react';
import ReactDOM from 'react-dom';
// TODO change to browserHistory if not deployed to gh-pages
// import { browserHistory } from 'react-router';
import { hashHistory } from 'react-router';

import Routes from './routes';

import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <Routes history={hashHistory} />,
  document.getElementById('root')
);
