import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="home-page">
      <div>
        <h1>Welcome!</h1>
        <h3>This is a simple note taking app</h3>
        <Link to="/notes" className="btn btn-lg btn-default">Create a note</Link>
      </div>
    </div>
  );
};

export default HomePage;
