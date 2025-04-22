import React from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVanPricing = () => {
  
  const {data}=useOutletContext()


  return (
    <div>
        <h1>The price of the item is {data.pricing}</h1>
      
    </div>
  )
}

export default HostVanPricing