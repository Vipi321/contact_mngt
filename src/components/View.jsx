import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './View.css'; // Ensure you have a CSS file for additional styles

function View() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://mp-server-42iv.onrender.com/create/${id}`);
        setData(res.data);
      } catch (err) {
        setError("Failed to fetch contact details. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className='loading-container'>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className='error-container'>
        <h4>{error}</h4>
      </div>
    );
  }

  return (
    <div className='view-container'>
      <div className='card'>
        <h4 className='text-secondary text-center mb-4'>Contact Details</h4>
        <div className='detail'>
          <strong className='text-dark'>Name:</strong> <span>{data.name}</span>
        </div>
        <div className='detail'>
          <strong className='text-dark'>Email:</strong> <span>{data.email}</span>
        </div>
        <div className='detail'>
          <strong className='text-dark'>Phone:</strong> <span>{data.phone}</span>
        </div>
        <div className='button-group'>
          <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
          <Link to="/" className='btn btn-primary'>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default View;
