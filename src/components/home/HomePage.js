import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="home-page">
      <div>
        <span className="glyphicon glyphicon-edit logo" aria-hidden="true"></span>
        <br></br>
        <h1>Welcome!</h1>
        <h3>This is a simple note taking app</h3>
        <br></br>
        <Link to="/notes" className="btn btn-md btn-primary">Create a note</Link>
      </div>
    </div>
  );
};

export default HomePage;
