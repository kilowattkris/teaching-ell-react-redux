import 'babel-polyfill'; //babel can't transpile some features, so need to add this in
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import initialState from './reducers/initialState';

/* eslint-disable no-console */
console.log('Hello World!');

const store = configureStore();

render(
  <Root />, document.getElementById('app')
);
