import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  
  
    return (
    
               <header>
                   <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}  >

                        <h1>
                            <Link to="/">
                                 #VANLIFE
                            </Link>
                        
                       </h1>    

                        <div>
                                <NavLink to="/" className={({isActive})=>isActive? "get": undefined}>
                                    Home
                                </NavLink>
                                <NavLink to="/about" className={({isActive})=>isActive? "get":undefined  }>
                                    About
                                </NavLink>  

                                <NavLink to="/host" className={({isActive})=>isActive? "get":undefined  }>
                                    Host
                                </NavLink>  
        
                                <NavLink to="/vans" className={({isActive})=>isActive? "get":undefined  }>
                                    Vans
                                </NavLink>            
                            
                       </div> 
                                     
                    
                   </nav> 

              </header>

  )

}

export default Header