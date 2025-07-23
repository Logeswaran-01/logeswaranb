import React from 'react'
import { Routes,Route,Link} from 'react-router-dom'

import './App.css'
import Navbar from './Components/Navbar.jsx'
import Scrolltop from './Components/Scrolltop.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'

function App(){


  return(
         <>
          <Navbar />
          <Scrolltop/>
          <Routes>
            
            < Route path='/' element={<Home/>}/>
            < Route path='/about' element={<About/>}/>
            < Route path='/skills' element={<Skills/>}/>
            < Route path='/projects' element={<Projects/>}/>
            < Route path='/contact' element={<Contact/>}/>
          </Routes>
         </>
  )
}

export default App