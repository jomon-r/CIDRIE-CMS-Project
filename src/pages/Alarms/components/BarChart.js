import React, { useState,useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
//import Client from '../client'
import axios from 'axios'

const BarChart = () => {
  const keys = []
  const values = []
 
  
  const [zoneDetails,setZoneDetails] = useState([])
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:3001/').then((response)=>{
        setZoneDetails(response.data);       
     })
    }, 10000);
      return () => clearInterval(interval);
  }, []);
    
    zoneDetails.map((val,key)=>{
       keys.push(val.Names);
       values.push(val.Numbers)
      
     })
     
  return (
    <div style={{
      position: 'absolute',
        top: '14.5%',
        right: 0,
        width: '52%',
        height: '48%',
        border: '3px solid #73AD21',
        flex:1,
        display:'flex',
        flexDirection:'row',  
        
    }}>
      
       <div style={{
            background:'Blue',
            position: 'absolute',
            width: '100%',
            height: '7%',
            color: 'white',
            textAlign: 'center'

        }}>
           ZONE ISSUES
        </div>
        <div style={{
          position: 'absolute',
          top: '8%',
          right: 0,
          width: '100%',
          height: '92%',
          
        }}>
         <Bar
        data={{
          labels: keys,
          datasets: [
            {
              label: 'Zone Issues',
              data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64, 1)',
                'rgba(145, 152, 192, 1)',
                'rgba(151, 182, 155,1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
              borderWidth: 1,
            },
            
          ],
        }}
        height={'100%'}
        width={'100%'}
       
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
            position: 'top',
            
          },
        }}
      />
      </div>
    </div>
  )
}

export default BarChart