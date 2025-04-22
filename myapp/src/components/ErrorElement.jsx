import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    
     const error=useRouteError()
    
  return (
    <div>Their was an eror
       
      <p>{error.message}</p>
      <p>{error.status}</p>

    </div>
  )
}

export default ErrorElement