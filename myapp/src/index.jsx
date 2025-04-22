import React from "react"
import {RouterProvider, createBrowserRouter,createRoutesFromElements, Route} from "react-router-dom"
import ReactDom from "react-dom/client"
import Home from "./Home"
import About from "./About"
import Vans, {loader as vansLoader} from "./Vans"
import VanDetail from "./VanDetail"
import "./index.css"
import "./server"
import Layout from "./components/Layout"
import Dashboard from "./host/Dashboard"
import Income from "./host/Income"
import Reviews from "./host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans from "./components/HostVans"
import {HostVanDetailsLayout} from "./components/HostVanDetailsLayout"
import HostVanPricing from "./host/HostVanPricing"
import HostVanPhotos from "./host/HostVanPhotos"
import HostVanDetails from "./host/HostVanDetails"
import Error from "./components/error"
import ErrorElement from "./components/ErrorElement"

// for data layer api

const router=createBrowserRouter(createRoutesFromElements(

    <Route  element={<Layout/>}>

                        <Route  path="/" element={<Home/>}  />           
                        <Route  path="/about" element={<About/>}  />
                        <Route  path="/vans"  errorElement={<ErrorElement/>}   loader={ async()=>await vansLoader()   }       element={<Vans/>}  />
                        <Route  path="/vans/:id" element={<VanDetail/>}  />  
                        <Route  path="/host"  element={<HostLayout/>}  >

                            <Route index  element={<Dashboard/>}   />     
                            <Route  path="income"  element={<Income/>}   />
                            <Route  path="hostvans"  element={<HostVans/>} />
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