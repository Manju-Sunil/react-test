import Profile from './Profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About'
import UserDetails from './Home'


function Navigator() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm navbar-primary bg-dark">
          <div className="container-fluid">
           
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
               
                <li className="nav-item">
                  <Link className="nav-link me-5" to="./About">About</Link>
                </li>
               
               
              
               
              </ul>
             
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/About" element={<About/>} /> 
         
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default Navigator;