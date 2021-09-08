import React from 'react'
import {useState} from 'react'
import { SiCoffeescript } from 'react-icons/si';

 function Header({title,showDate,showTime}) {
  return (
    <div className="header">
        <h2 >{title} {showDate}  <SiCoffeescript/>
        
        </h2>
        <h3>{showTime}</h3>

        
      
    </div>
  )
}
export default Header;
