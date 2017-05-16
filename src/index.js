import 'babel-polyfill'; //babel can't transpile some features, so need to add this in
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import styles from './styles/styles.css';

/* eslint-disable no-console */
console.log('Hello World!');

render(
  <App />, document.getElementById('app')
);
