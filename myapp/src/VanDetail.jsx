import React, {useState,useEffect} from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

const VanDetail = () => {
 
    const [data,setData]=useState(null)
    
    const location=useLocation()

    const search=location.state?.search || ""
    const type=location.state?.type || ""

    console.log(location)
  

     const params=useParams()
     //make fetch request with params
 
     useEffect(()=>{

        fetch(`/api/vans/${params.id}`).then(res=>res.json())
        .then(data=>setData(data.vans))   


     },[params.id])      

   

  return (
    <div>

        <Link   style={{color:"black"}}  to={`..?${search}`}   relative="path"    >{type? `Back to all ${type}`: "Back to all van details"  }</Link>


        <h1>Anumal details</h1>    
        {data ? <div  style={{textAlign:"center"}}  >
             
              <img  src={data.show} width="200px" height="200px" alt="animal"  /> 

              <h2>This animal belong to class {data.class} and the name of the animal is {data.name}</h2>

        </div>: null   }
    </div>
  )
}

export default VanDetail