import React from 'react'
import {   Form, useLoaderData, useNavigation } from 'react-router-dom'
import { loginUser, myRedirect } from '../api/api'


function  mySleep(tm){

    return new Promise(resolve=> setTimeout(resolve,tm) )

}


export async function action({request}){
  
    const pathName=new URL(request.url).searchParams.get("redirectto") || "/host"

  
    const formData=await request.formData()

    const email=formData.get("email")
    
    const password=formData.get("password")

    const data=loginUser({email, password})   
  
    try {
        
       localStorage.setItem("loggedin", true)
       
        
  
        return await myRedirect(pathName)

    
    } catch (error) {
        
       console.log(error.message)
        return error.message

    }



}



export async function loader({request}){

   const message=new URL(request.url).searchParams.get("message")    
     
   
   return message

}






const Loginform= () => {
   
    const message=useLoaderData()  
    const navigation=useNavigation()
    
     console.log(navigation)

  return (
    <div> 
          {message && <h3 style={{color:"red", textAlign:"center"  }}  >  {`${message}!! `} </h3>}
          <h1>Sign in to your account</h1>
          <Form   method="post"  replace   >
  
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
                         
                          <button  disabled={navigation.state === "submitting"}  type="submit" class={navigation.state === "submitting"? "switch": "btn-inp"}  >
                            
                              {navigation.state === "submitting" ? "logging in": "login"  }
                            
                             </button>
 

                    </div>
              

          </Form>


    </div>
  )
}


export default Loginform