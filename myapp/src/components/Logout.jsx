import React from 'react'
import {Link } from "react-router-dom"

export async function loader(){
  
   localStorage.removeItem("loggedin") 
    
   return null

}

const Logout = () => {
  return (
    <div   style={{marginBottom:"25px"}} >
      
        <h1>You have successfully log out</h1>
        <Link  to="/login"  >Click here to sign in</Link>  
         
    </div>
  )
}

export default Logout