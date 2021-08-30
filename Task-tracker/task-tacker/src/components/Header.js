import React from 'react';
import Button from "./Button"


 function Header({title}) {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color="purple" text="Show Create a Task Bar"/>
    </header>
      
    
  )
}

// Header.defaultProps={
//     title:"Task tracker as default"
// }

export default Header;
