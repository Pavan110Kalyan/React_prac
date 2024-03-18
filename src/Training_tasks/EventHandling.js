import React from 'react'
import Ref from './Ref'
import { Navigate, useNavigate } from 'react-router-dom'

const EventHandling = () => {
    const Navigate=useNavigate();
  return (
    <div>
      <button onClick={()=> Navigate("ref")}>
        Click Me
      </button>
    </div>
  )
}

export default EventHandling
