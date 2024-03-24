import React from 'react';
import { Link } from 'react-router-dom';
import luke from './image/Luke.png';
import Darth from './image/Darth.jpg';

function Picture() {
  return (
    <div>
      <h1>Character Images</h1>
      <Link to="/api">
        <img src={luke} alt="Luke" />
        <img src={Darth} alt="darth" />
      </Link>
    </div>
  );
}

export default Picture;




