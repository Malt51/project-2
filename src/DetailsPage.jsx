import React from 'react';
import { useParams } from 'react-router-dom';
import Darth from './image/Darth.jpg';
import luke from './image/Luke.png';


function DetailsPage() {
  let { name } = useParams();

  // Mapping of character names to image paths
  const characterImages = {
    'Darth Vader': Darth,
    'Luke Skywalker': luke,
    // Add more characters and their corresponding image paths as needed
  };

  // Determine the image path based on the character's name
  const imagePath = characterImages[name];

  return (
    <div>
      <h2>Image for {name}</h2>
      {/* Render character details here */}
      {imagePath && <img src={imagePath} alt={name} />}
    </div>
  );
}

export default DetailsPage;
