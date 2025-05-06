import React from 'react'
import {myRedirect} from "./api/api"




export async function loader({request}){
/// implement authRequired
  
  const result=localStorage.getItem("loggedin")

  const pathName=new URL(request.url).pathname 

  if (!result){
    
     const res=await myRedirect(`/login?message=you must login first&&redirectto=${pathName}`)
     return res

  }

    return "this is my data"

}


const About = () => {
  return (
    <div>
        <h1>This is my about page</h1>
   </div>
  )
}

export default About