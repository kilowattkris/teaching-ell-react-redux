import 'babel-polyfill'; //babel can't transpile some features, so need to add this in
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* eslint-disable no-console */
console.log('Hello World!');

render(
  <App />, document.getElementById('app')
);
