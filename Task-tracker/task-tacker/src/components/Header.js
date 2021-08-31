import React from 'react';
import Button from "./Button";
import "./Header.css"



 function Header({title,toggleShow,taskBarShowed,}) {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button  color={taskBarShowed ? "lightblue" :"#2c795f"} 
         text={taskBarShowed ? "Hide Create a Task Bar" : "Show Create a Task Bar"}
          toggleShow={toggleShow} taskBarShowed={taskBarShowed}/>
    </header>
      
    
  )
}

// Header.defaultProps={
//     title:"Task tracker as default"
// }

export default Header;
