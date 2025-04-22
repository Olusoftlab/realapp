import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const Error = () => {
  return (
    <div >

           <h1>404 Page not found</h1>
           <div  className='home-div' >

                <Link className='back-to-home' to=".."   > Back to home page </Link>   

           </div>
                              

    </div>
  )
}

export default Error