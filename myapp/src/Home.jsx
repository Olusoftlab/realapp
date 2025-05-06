import React from 'react'
import ImageOne from "./images/download (5).jpg"
import {myRedirect} from "./api/api"

// initialize fake login to protect route

export async function loader(){
   
    const login=localStorage.getItem("loggedin")
   
    if (!login){
      
     return  await myRedirect("login?message=you must log in first!")    

    }
     
    return null

}



const Home = () => {
  return (
    <div>
        <h1>Welcome to my home page</h1>
        <img src={ImageOne} width="100px" height="100px" alt="" />
   </div>
  )
}

export default Home