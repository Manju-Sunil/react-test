import React, { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="row">
      <div className="col">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          </div>
        
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter First name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
      
        </div>
        <div className="col">
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          </div>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter Last name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label></div>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>  
      </div>
    </div>
  );
}

export default Home;
