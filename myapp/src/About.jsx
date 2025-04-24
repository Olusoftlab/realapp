import React from 'react'
import {myRedirect} from "./api/api"




export async function loader(){
/// implement authRequired
  
  const result=false
    
  if (!result){
    
     const res=await myRedirect("/login")
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