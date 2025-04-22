import React from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVanPhotos = () => {

   const {data}=useOutletContext()

  return (
    <div>
    
         <img   style={{textAlign:"center"}}     src={data.show} width="200px" height="200px" alt="photos"   />

    </div>
  )
}

export default HostVanPhotos