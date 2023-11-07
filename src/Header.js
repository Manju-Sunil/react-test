import React from 'react';
import './App.css';
import company from './izh.png';
import company1 from './save.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
         <div className="header-card border border-0">
      <div className="header-container">
        <div className="logo">
          <img src={company} alt="Logo" className="small-logo" />
        <div className='small' > <small className=' ms-5'><b>innovation ahead</b> </small></div>
        </div>

        <div className="nav-links">
          <h6 >Home</h6>
          <h6 className='ms-4'>About</h6>
          <h6 className='ms-4'>Service</h6>
          <h6 className='ms-4's>Contact</h6>
        </div>
        <div>
          <img src={company1} alt="Logo" className="small-logo1" />
        </div>
      </div>
      <div >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '1300px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginRight: '460px' }}>
          <h6 style={{ marginBottom: '30px',marginRight:'30px' }}>Our Service</h6>
          <h1 style={{ marginTop: '-30px', marginRight: '-55px' }}>Branding.</h1>
        </div>
      </div></div>
    </header>
  );
}

export default Header;
