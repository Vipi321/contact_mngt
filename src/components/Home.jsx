import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';
import './Home.css'; // Ensure you have this CSS file for additional styles

const ContactCard = ({ contact, onDelete }) => (
  <div className="col-lg-6 col-md-5 mb-4">
    <div className="card h-100">
      <div className="card-body p-10 text-center">
        <h5 className="fw-bolder">{contact.name}</h5>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div className='card-footer justify-content-between'>
        <Link to={`/view/${contact.id}`}>
          <Button variant='success'>Details</Button>
        </Link>
        <Link to={`/update/${contact.id}`}>
          <Button variant='primary'>Edit</Button>
        </Link>
        <Button variant='danger' onClick={() => onDelete(contact.id)}>Delete</Button>
      </div>
    </div>
  </div>
);

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://mp-server-42iv.onrender.com/create/');
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Would you like to Delete?");
    if (confirm) {
      try {
        await axios.delete(`https://mp-server-42iv.onrender.com/create/${id}`);
        setData(data.filter(item => item.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return (
    <div className='text-center mt-5'>
      <Spinner animation="border" />
      <h3>Loading...</h3>
    </div>
  );

  if (error) return <h3 className='text-danger text-center'>{error}</h3>;

  return (
    <>
      {/* Stylish Navbar */}
      <Navbar className="custom-navbar" expand="lg">
  <div className="container">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/008/506/403/small_2x/telephone-contact-icon-in-black-circle-shape-free-png.png"
      alt="Logo"
      className="navbar-logo"
        />
               <Navbar.Brand as={Link} to="/" className="brand-name">Contact Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ms-auto"> {/* Use 'ms-auto' to align links to the right */}
                 <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/create" className="nav-link">Create Contact</Nav.Link>
                <Nav.Link as={Link} to="/home" className="nav-link">Contact</Nav.Link>
               </Nav>
              </Navbar.Collapse>
              </div>
             </Navbar>

      {/* Main Content */}
      <div className='container mt-5'>
        <h2 className='text-center mb-4'>Contact List</h2>
        <div className="row">
          {data.length > 0 ? (
            data.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
            ))
          ) : (
            <h3 className='text-danger text-center'>No Contacts Yet!!</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
