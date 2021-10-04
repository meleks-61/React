import React from 'react'
import { useHistory } from 'react-router'

const Contact = () => {
    const history=useHistory()
  return (
    <div>
       <h1 style={{color:"green"}}>Contact page</h1>
       <button onClick={()=>history.push("/")}>Home</button>
    </div>
  )
}

export default Contact
