import React from 'react';

import img4 from './facebook.png'
import yourImage from './image1.png'; // Import your image

function About() {
 
  const cardContainerStyle = {
    backgroundColor: '#fff', // Background color for the card
    padding: '20px', // Padding for spacing
    border: '1px solid #ccc', // Border to create a card-like appearance
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle effect
    margin: '20px', // Adjust margin as needed
    textAlign: 'center', // Center the content horizontally
    position: 'relative', // Relative positioning for inner elements
  };
  const imageStyle = {
    width: '100%',  // Set the desired width
    height: '100%',
    // Automatically adjust the height to maintain aspect ratio
  };

 

  
  return (
    <div >
       <div className='border border-0 overflow' style={cardContainerStyle}>
        <div style={{ position: 'relative' }}>
          <div className='overlay-image'>
          <img className='over' src={img4} alt="Description of your image"  />
          </div>
          <img className='img-fluid background-image' src={yourImage} alt="Description of your image" style={imageStyle} />
         
        </div></div>

        
      </div>
    
  );
}

export default About;
