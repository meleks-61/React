import React from 'react'

 function Button({text,color,toggleShow}) {
  return (
    <div>
        <button onClick={toggleShow} className="btn" style={{backgroundColor:color}}>
            {text}
        </button>
      
    </div>
  )
}
export default Button;
