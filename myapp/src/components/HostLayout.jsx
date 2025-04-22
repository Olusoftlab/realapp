import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavLink} from "react-router-dom"

const HostLayout = () => {
  return (
    <div style={{marginTop:"4rem"}}  >
          <NavLink to="/host" end className={({isActive})=> isActive? "under": null}  >Dashboard</NavLink>
          <NavLink to="/host/income"  className={({isActive})=>isActive? "under": null}  >Income</NavLink>
          <NavLink to="/host/hostvans"  className={({isActive})=>isActive? "under": null}   >Vans</NavLink>
          <NavLink to="/host/reviews"   className={({isActive})=>isActive? "under": null}   >Reviews</NavLink>
          <Outlet/>

    </div>
  )
}

export default HostLayout