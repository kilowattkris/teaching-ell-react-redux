import 'babel-polyfill'; //babel can't transpile some features, so need to add this in
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import initialState from './reducers/initialState';
import * as noteActions from './actions/noteActions';

/* eslint-disable no-console */
console.log('Hello World!');

const store = configureStore();
store.dispatch(noteActions.loadNotes());

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('app')
);
