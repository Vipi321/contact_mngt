import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='vh-100' style={{background:"#D3D9D4"}}>
    <div className='container row'>
    <div className='col-sm-6 col-12'>
        <img className='me-5' src="https://cdn.dribbble.com/users/469578/screenshots/3571026/conversation.gif" width='100%' height='100%' alt="" />
    </div>
    <div className=' mt-5 col-12 col-sm-6 align-items-center justify-content-center d-flex'>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <Link to='/create' className='btn btn-success px-4 '>Create New Contact</Link>
        <Link to='/home' className='btn btn-info mt-5 px-5'>View Peoples</Link>
        </div>
    </div>
    
    </div>
    
         
    </div>
    </>
  )
}

export default Landing