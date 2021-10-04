import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const {id}=useParams()
  return (
    <div>
      <h1 style={{color:"blue"}}> Details Page</h1>
      <p>details-{id}</p>
    </div>
  )
}

export default Details
