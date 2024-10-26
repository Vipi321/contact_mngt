import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Create.css'; // Import external CSS for styling

function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.email && values.phone) {
      axios.post('https://mp-server-42iv.onrender.com/create/', values)
        .then(res => {
          console.log(res);
          navigate('/');
        })
        .catch(err => console.log(err));
    } else {
      alert("Please fill in all fields with valid input.");
    }
  };

  return (
    <div className="create-container d-flex justify-content-center align-items-center vh-100">
      <div className="form-wrapper p-5">
        <h4 className="text-center mb-4 text-white">Add New Contact</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fa fa-user"></i></span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fa fa-envelope"></i></span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={e => setValues({ ...values, email: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-white">Phone</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fa fa-phone"></i></span>
              <input
                type="number"
                name="phone"
                className="form-control"
                placeholder="Enter Phone Number"
                onChange={e => setValues({ ...values, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/" className="btn btn-primary">Back</Link>
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
