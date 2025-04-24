import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { NavLink, Link } from 'react-router-dom'
import {Outlet} from "react-router-dom"







const HostVanDetailsLayout = () => {

   const {id}=useParams()

   const [data,setData]=useState(null)

  useEffect(()=>{

        fetch(`/api/vans/${id}`).then(res=>res.json())
        .then(data=>setData(data.vans))

  }, [id])

    

  return (
   

     <div>


               <div  style={{margin:"5rem"}}>
                    <Link to=".."  relative="path"    >
                         Back to all vans
                    </Link>
               </div>         
               
               {data ? <div style={{textAlign:"center"}}  >

                    <img src={data.show} width="150px" height="150px" alt="animal"   />
                    <h2>The name of the hosted list is {data.name}  and it belongs to class {data.class} </h2> 

               </div> : null   } 

               <nav  style={{margin:"5rem"}} >

                    <NavLink to="." end  className={({isActive})=>isActive? "under" : null  } >
                         Details
                    </NavLink>    

                    
                    <NavLink to="photos"   className={({isActive})=>isActive? "under" : null  } >
                         Photos
                    </NavLink> 

                    
                    <NavLink to="pricing"   className={({isActive})=>isActive? "under" : null  } >
                         Pricing
                    </NavLink>   
                    
               </nav> 
               <Outlet context={{data}} />   

    </div> 

  
   
  )
}


export  {HostVanDetailsLayout}