import { useState } from 'react'
 import './App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
  
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default App
