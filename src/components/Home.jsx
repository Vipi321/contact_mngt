import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {

  const [data, setData]=useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('https://mp-server-42iv.onrender.com/create/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])

  const handleDelete=(id)=>{
    const confirm = window.confirm("would you like to Delete?");
    if(confirm){
      axios.delete('https://mp-server-42iv.onrender.com/create/'+id)
      .then (res =>{
        location.reload();
      }).catch(err => console.log(err))
    }
  }

  return (
    <>
    <div className='container mt-5' >
      <h2 className='d-flex justify-content-center'>Contact List</h2>

      {
        data?.length > 0 ?
        <>

        {
          data?.map((data,index)=>(
            <div className="col mb-5 mt-5">
            <div className="card h-100" key={index}>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{data.name}</h5>
                        <h5 className="fw-bolder">{data.email}</h5>
                        <h5 className="fw-bolder">{data.phone}</h5>
                    </div>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <Link to={`/view/${data.id}`}><Button variant='success'>Details</Button></Link>
                    <Link to={`/update/${data.id}`}><Button variant='primary' className='px-4'>Edit</Button></Link>
                    <Link onClick={e => handleDelete (data.id)}> <Button variant='danger'>Delete</Button></Link>
                </div>
            </div>
          </div>  
          ))
        }
        </>
        :
        <h3 className='text-danger text-center'>No Contacts Yet!!</h3>
      }
    
    
    </div>
    </>
  )
}

export default Home