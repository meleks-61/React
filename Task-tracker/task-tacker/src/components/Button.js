import React from 'react';
import "./Button.css"

 function Button({text,color,toggleShow, taskBarShowed}) {
  return (
    <div >
        <button onClick={toggleShow} className={`btn  ${taskBarShowed ?  "hide" : ""}`} style={{backgroundColor:color}}>
            {text}
        </button>
      
    </div>
  )
}
export default Button;
