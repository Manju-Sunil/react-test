import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import yourImage from './image1.png'; // Import your image
import your1Image1 from './image4.png'; // Import your image

function About() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(1);
  }

  const imageStyle = {
    width: '350px',  // Set the desired width
    height: '300px',
    marginRight: '190px'  // Automatically adjust the height to maintain aspect ratio
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '0',
    left: '350px', // Adjust the left position to align with the image
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add a background color for readability
  };

  const logoCreationStyle = {
    marginLeft: '-700px',
    
  };

  return (
    <div>
      <button onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft}  />
      </button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h6 style={{ marginRight: '460px' }}>Our Service</h6>
        <h1 style={{ marginTop: '1px',  marginRight: '370px' }}>Branding.</h1>
        <div style={{ position: 'relative' }}>
          <img src={yourImage} alt="Description of your image" style={imageStyle} />
          <div style={textContainerStyle}>
            <h6>IZHTECH</h6>
            <h1>Here is some text.</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <div style={logoCreationStyle}>
              <h4>Logo Creation</h4>
            </div>
            <img src={your1Image1} alt="Description of your image" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;






import React from 'react';


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
    width: '250px',  // Set the desired width
    height: '200px',
    marginLeft: '-300px'  // Automatically adjust the height to maintain aspect ratio
  };

  const textContainerStyle = {
   
    top: '-50px',
    left: '340px', // Adjust the left position to align with the image
    padding: '2px',
    // Add a background color for readability
  };

  
  return (
    <div>
       <div style={cardContainerStyle}>
        <div style={{ position: 'relative' }}>
          <img src={yourImage} alt="Description of your image" style={imageStyle} />
          <div style={textContainerStyle}>
            <h6>IZHTECH</h6>
            <h1>Here is some text.</h1>
            <p>At Izh-Tech, we firmly believe that a robust brand forms the very heart of a successful business. Our conviction in this truth is what fuels our passion to provide a comprehensive array of branding and design services aimed at not just helping you establish your brand, .</p>
           <h5>Our Comprehensive Suite of Branding and Design Services</h5>
           <p>Our commitment to your brands success is reflected in our wide-ranging suite of services. Here’s a closer look at what we offer:</p>
            
            
          </div>
        </div></div>
      </div>
    
  );
}

export default About;
