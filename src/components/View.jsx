import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
  const [data, setData]=useState([])
  const {id} = useParams();

  useEffect(()=>{
    axios.get('https://mp-server-42iv.onrender.com/create/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center 'style={{background: "#124E66"}}>
      <div className=' border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h4 className='text-secondary d-flex justify-content-center align-items-center h4'>Details</h4>
        <form action="">
          <div className='mb-2'>
          <strong className='text-dark'>Name : {data.name}</strong>

          </div>
          <div className='mb-2'>
          <strong className='text-dark'>Email : {data.email}</strong>

          </div>
          <div className='mb-2'>
            <strong className='text-dark'>Phone : {data.phone}</strong>
          </div>
          <div className='mb-3 mt-4 d-flex justify-content-between'>
            <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
            <Link to="/" className='btn btn-primary ' >Back</Link>
          </div>
          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default View