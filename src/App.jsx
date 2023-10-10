import { useState } from 'react'
 import './App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

function App() {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    
    </>
  )
}

export default App
