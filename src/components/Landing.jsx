import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'; // Import custom CSS for animations and styling

function Landing() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/008/506/403/small_2x/telephone-contact-icon-in-black-circle-shape-free-png.png"
              alt="Logo"
              className="navbar-logo"
            />
            Contact Manager
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link nav-link-hover" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-hover" to="/create">Add Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-hover" to="/home">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Landing Page Content */}
      <div className='landing-page vh-100 d-flex align-items-center'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 col-12'>
              <div className='animated-image'>
                <img
                  src="https://cdn.dribbble.com/users/469578/screenshots/3571026/conversation.gif"
                  className='img-fluid'
                  alt="Conversation animation"
                />
              </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className='d-flex flex-column justify-content-center align-items-center text-section'>
                <h1 className='heading mb-4 animate-heading'>Stay Connected</h1>
                <p className='subheading mb-5 animate-subheading'>Manage your contacts effortlessly.</p>
                <Link to='/create' className='btn custom-btn btn-success mb-3 animated-btn'>
                  Create New Contact
                </Link>
                <Link to='/home' className='btn custom-btn btn-info animated-btn'>
                  View Contacts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
