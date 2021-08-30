import React from 'react';
import Button from "./Button"


 function Header({title,toggleShow,taskBarShowed,}) {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button  color={taskBarShowed ? "lightblue" :"purple"} 
         text={taskBarShowed ? "Show Create a Task Bar" : "Show Create a Task Bar"}
          toggleShow={toggleShow}/>
    </header>
      
    
  )
}

// Header.defaultProps={
//     title:"Task tracker as default"
// }

export default Header;
