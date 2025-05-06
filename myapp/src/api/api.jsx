import {redirect} from "react-router-dom"

export async function getVans(){

    const res=await fetch("/api/vans")

    if (!res.ok){
   
      return res.statusText       

    } 

    const data=await res.json()

    return data.vans
     
}

export async function myRedirect(a){
 
    const res=redirect(a) 
    res.body=true
    
    return res
}


export async function loginUser(info){

    const res=await fetch("/api/login", {method:"post",  body:JSON.stringify(info)    }   ) 
    
    const data= await res.json()

    if (!res.ok){

          return {

               message:"their was an error",
               statusText:res.statusText,
               status:res.status
          }  

    }
  
  

    return data
    

}