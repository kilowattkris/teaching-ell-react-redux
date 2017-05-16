import 'babel-polyfill'; //babel can't transpile some features, so need to add this in
import React from 'react';
import {render} from 'react-dom';
import HomePage from './components/home/HomePage';

/* eslint-disable no-console */
console.log('Hello World!');

render(
  <HomePage />, document.getElementById('app')
);
