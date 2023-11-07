import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Dark from './dark'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; // Import the CSS file

function App() {
  return (
    
    <div className='overflow'>
{/* <ServicesDetail/> */}

      <div className='row overflow' >
        <Header />
      </div>
      <div className='row mt-0 overflow'>
        <div className='col-6'>
          <Body />
        </div>
        <div className='col-6 mt-0'>
          <Footer />
        </div>

      </div>
      <div className='row overflow'>
<Dark/>
      </div>


    </div>
  );
}

export default App;
