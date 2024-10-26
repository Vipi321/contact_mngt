import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import View from './components/View'
import Update from './components/Update'
import Create from './components/Create'
import './bootstrap.min.css'
import Landing from './components/Landing'


function App(){

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </>
  )
}

export default App
