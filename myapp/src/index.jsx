import React from "react"
import {RouterProvider, createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import ReactDom from "react-dom/client"
import Home, {loader as homeLoader}   from "./Home"
import About, {loader as aboutLoader} from "./About"
import Vans, {loader as vansLoader} from "./Vans"
import VanDetail from "./VanDetail"
import "./index.css"
import "./server"
import Layout from "./components/Layout"
import Dashboard,   {loader as dashLoader}  from "./host/Dashboard"
import Income from "./host/Income"
import Reviews from "./host/Reviews"
import HostLayout, {loader as hostLayout}   from "./components/HostLayout"
import HostVans,  {loader as hostVansLoader}   from "./components/HostVans"
import {HostVanDetailsLayout} from "./components/HostVanDetailsLayout"
import HostVanPricing from "./host/HostVanPricing"
import HostVanPhotos from "./host/HostVanPhotos"
import HostVanDetails from "./host/HostVanDetails"
import Error from "./components/error"
import ErrorElement from "./components/ErrorElement"
import Loginform, {action, loader as loginLoader  }  from "./components/loginform"
import Logout, {loader as logOutLoader}  from "./components/Logout"

// for data layer api

const router=createBrowserRouter(createRoutesFromElements(

    <Route  element={<Layout/>}>

                        <Route  path="/"  loader={async (obj)=> await homeLoader(obj)}   element={<Home/>}  />           
                        <Route  path="about"  loader={async(obj)=> await aboutLoader(obj)   }     element={<About/>}  />
                        <Route  path="vans"     loader={ async(obj)=>await vansLoader(obj)   }       element={<Vans/>}  />
                        <Route  path="vans/:id" element={<VanDetail/>}  /> 
                        <Route   path="login"    loader={async(obj)=> await loginLoader(obj)   }    action={async (obj)=> await action(obj) }      element={<Loginform/>}   />
                        <Route   path="logout"  loader={async ()=>await logOutLoader()   }   element={<Logout/>}   />
                        <Route  path="host"        element={<HostLayout/>}  >

                            <Route index   loader={async (obj)=>  await dashLoader(obj)}   element={<Dashboard/>}   />     
                            <Route  path="income"  element={<Income/>}   />
                            <Route  path="hostvans"  loader={async ()=>await hostVansLoader()}  element={<HostVans/>} />
                            <Route  path="hostvans/:id" element={<HostVanDetailsLayout/>}>
                                
                                <Route  index element={<HostVanDetails/>}   /> 
                                <Route   path="pricing"  element={<HostVanPricing/>} />
                                <Route  path="photos"  element={<HostVanPhotos/>}    /> 
                            
                            </Route>
                            
                            <Route  path="reviews" element={<Reviews/>}    /> 

                        </Route>
                         
                        <Route  path="*" element={<Error/>}    />                                 
                   </Route> 


))

const App=()=>{


    return (

         <RouterProvider  router={router}  />
      


    )


}



ReactDom.createRoot(document.getElementById("root")).render(
  
     <App/>

)