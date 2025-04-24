import React, {Suspense, useState} from 'react'
import { useSearchParams, useNavigate, Form } from 'react-router-dom'
import { loginUser } from '../api/api'



export async function action({request}){
  
    console.log(request)
    return null
}





const Loginform= () => {







   const [searchPaarams,setSerachParamss]=useSearchParams()

   const message=searchPaarams.get("message")
   
   

    // const [inputText,setInputText]=useState({email:"", password:"" })
    
    // const [status,setStatus]=useState("idle")
   
  //  const navigate=useNavigate()  
  

    // const handleForm=(e)=>{

    //      e.preventDefault()
    //      setStatus("submiting")        
    //      loginUser(inputText).then(val=>{
    //           console.log(val) 
    //           navigate("/",  {replace:true} )
    //      }).catch(err=>{
    //         console.error(err.message)
            
    //      })
    //      .finally(()=>{
    //         setStatus("idle")  
    //         setInputText({email:"", password:""})       
    //      })

      
    // }
   
    // const handleCChange=(e)=>{

    //     const name=e.target.name
          
    //    setInputText({...inputText,  [name]:e.target.value    })

    // }
     



  return (
    <div> 
           {message && <h4   style={{color:"red",  textAlign:"center"  }}  >You must login first</h4>} 
          <h1>Sign in to your account</h1>
          <Form   method="post"  >
  
                    <div className='input-cont' >
                            <label htmlFor='email' class="label-1"    >Email:</label>
                            <input    type="email" className="email" name="email" placeholder='xyz@gmail.com'  />                        
                    </div>
                    
                    <div  className='input-cont'>
                            <label htmlFor='password' class="label-2"    >Password:</label>
                            <input    type="password" className="password" name="password"  />                        
                    </div>
             
                    <div  className='input-cont' >
                          
                          {/* <input class="btn-inp"   type="submit" value="Login"   />  */}
                         
                          <button      type="submit" class="btn-inp"  >Login </button>
 

                    </div>
              

          </Form>


    </div>
  )
}


export default Loginform