export async function getVans(){

    const res=await fetch("/api/vans")

    if (!res.ok){
   
      return res.statusText       

    } 

    const data=await res.json()

    return data.vans
     
}