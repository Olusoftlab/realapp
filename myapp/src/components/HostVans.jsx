import React, {useState,useEffect } from 'react'
import {Link, useLoaderData } from "react-router-dom"
import {getVans, myRedirect} from "../api/api"



export async function loader(){

    const result=false

    if (!result){
        
        const res=await myRedirect("/login")
        return res
         
    }
  

    const res=await getVans()
    const data=res.filter(item=>  item.id >3) 
    return data
}



const HostVans = () => {

    const data=useLoaderData()

//   const [data, setData]=useState([])

//   useEffect(()=>{

//        fetch("/api/vans").then(res=>res.json())
//        .then(data=>{
          
//           const listVans=data.vans.filter(item=> item.id > 3 )
//           setData(listVans)  

//        })

//   },[])


  return (
    <div>
        <h1>Hostvans goes here</h1>
        
        <div className='main'>
 
             {
              
                data.map(item=>(

                   <div key={item.id} className='list'  >
                       <Link   to={`/host/hostvans/${item.id}`}  style={{display:"block", color:"black"}}  >
                            <img src={item.show}  width="150pxx" height="150px" alt="animal"   />
                            <p >Name:{item.name}</p>
                            <p>class:{item.class}</p>
                       </Link>       
                   </div>

                ))

             }      

        </div>

    </div>
  )
}

export default HostVans