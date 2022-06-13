import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Client() {
    const [zoneDetails,setZoneDetails] = useState([])
    const keys = []
    const values = []
    useEffect(()=>{
        axios.get('http://localhost:3001/').then((response) => {
            setZoneDetails(response.data);        })
    },[]);
    zoneDetails.map((val,key)=>{
       keys.push(val.Names);
       values.push(val.Numbers);
      //  console.log(Names)
     })
   
  return (
      
   {keys,values}
  )
}

export default Client