import React from 'react'
import Contact from './Componets/Contact'
import Home from './Componets/Home'
import Project from './Componets/Project'
import TechStacks from './Componets/TechStacks'

function Hero() {
  return (
    <div className='lg:mx-12 mt-10'>
      <Home/>
      <TechStacks/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Hero
