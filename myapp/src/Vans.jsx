import React, {useEffect,useState} from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import "./index.css"
import {getVans} from "./api//api"


export const loader=async()=>{

   const data=await getVans()  

   return data 

}





const Vans = () => {

   //   const [data, setData]=useState([])

   //   const [loading, setLoading]=useState(false)
     
   //   const [error,setError]=useState(null)

     const loaderData=useLoaderData()
    
     

     const [searchPaarams, setSearchParams]=useSearchParams()

     const changeValue=(e)=>{

        if (e.target.value !== "All"){

           setSearchParams({"id":parseInt(e.target.value)})


        }else{
               
           setSearchParams({"id":"" })

        }

     }


      const typeFilter=searchPaarams.get("id")
     
       

   //   useEffect(()=>{
       
   //        async function loadVans(){
             
   //           try {
   //              setLoading(true)
   //              const data=await getVans()
   //              setData(loaderData)

   //           } catch (error) {
                
   //              console.log(error.message)
   //              setError(error.message)           
   //           }
             
   //           setLoading(false)

               
   //        }
      
   //         loadVans()
 
   //   },[])  

 
     const displayedVans=typeFilter? loaderData.filter(item=> item.id === typeFilter):loaderData

 
    const handleQuery=(key,value)=>{

      const sp=new URLSearchParams(searchPaarams)

      if (value === null){

         sp.delete(key)

      }else{

         sp.set(key,value)

      }  

   
      return `?${sp.toString()}`

    }     
  

 

  return (
    <div>
        <h1>Welcome to vans page</h1>
          
        <div  style={{marginBottom:"40px"}}>
          
             <label  style={{marginRight:"4px"}}   >Filter</label>
             <select  style={{border:"none"}}  onChange={changeValue}     name="select">
                 <option value="All">All</option>
                 <option value="1"  >One</option>  
                 <option value="2"  >Two</option>  
                 <option value="3" >Three</option>
                 <option value="4" >Four</option>
                 <option value="5" >Five</option>
                 <option value="6" >Six</option>
             </select>
                        
        </div>  

        {/* create another filter secttion  */}

        <div>

             {/* <Link  to={handleQuery("id", "")}  >All</Link> */}

             {typeFilter? <Link  to={handleQuery("id", "")}   >Clear</Link> : null  }

             <Link  to={handleQuery("id", "1")}     >One</Link>
             <Link  to={handleQuery("id", "2")} >Two</Link>
             <Link   className={parseInt(typeFilter) === 3 ? "design":null}   to={handleQuery("id", "3")}  >Three</Link>
             <Link  to={handleQuery("id", "4")}  >Four</Link>      
                 
        </div> 


        <div className='container'  >
             
            {
               displayedVans.map(item=>(

                  <div key={item.id}  >
                       <Link to={`/vans/${item.id}`} state={{search:searchPaarams.toString(), type:typeFilter   }  }  >
                            
                             <img   src={item.show} width="200px" height="200px"  alt="animal"  />
                                              
                       </Link> 
                        <p>Name:{item.name}</p>
                        <p>class:{item.class}</p> 
                  </div>

               )) 
            }

        </div>
    </div>
  )
}

export default Vans