import React from 'react'
import { useLocation } from 'react-router'

const About = () => {
    const {pathname}=useLocation()
  return (
    <div>
      <h1 style={{color:"red"}}>About page</h1>  
      <p> {pathname}</p>
        </div>
  )
}

export default About
