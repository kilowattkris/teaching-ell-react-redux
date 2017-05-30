import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NotesPage from './components/notes/NotesPage'; //eslint-disable-line import/no-named-as-default
import Header from './components/common/Header';

class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
          <Route path="/notes" component={NotesPage}/>
        </Route>
      </Router>
    );
  }
}

export default Root;
