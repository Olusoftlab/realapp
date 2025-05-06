import React from 'react'
import { myRedirect } from '../api/api'

export const loader=async({request})=>{

    const login=localStorage.getItem("loggedin") 

    if (!login){

        return await myRedirect("/login?message=you must login first")

    }

    return null

}


const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard goes here</h1>
    
    </div>
  )
}

export default Dashboard