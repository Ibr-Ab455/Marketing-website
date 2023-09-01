import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideNavbar from './pages/navbar/sideNavbar'
import Hero from './pages/home/Hero'
import SideAbout from './pages/about/SideAbout'
import SideServices from './pages/services/SideServices'
import SideContact from './pages/contact/SideContact'

function App() {
  

  return (
    <>
     <Router>
      <SideNavbar/>
       
       <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<SideAbout/>}/>
        <Route path='/services' element={<SideServices/>}/>
        <Route path='/contact' element={<SideContact/>}/>
       </Routes>
     
     </Router>
     
   
    </>
  )
}

export default App
