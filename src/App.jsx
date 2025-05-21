import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <Router>
        <Navbar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/toaster' element={<Toaster />}/>
    </Routes>
    </Router>
    </>

  )
}

export default App
