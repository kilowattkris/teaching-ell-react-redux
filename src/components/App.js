import React, {PropTypes} from 'react';
import HomePage from './home/HomePage';
import Header from './common/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid main-container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
