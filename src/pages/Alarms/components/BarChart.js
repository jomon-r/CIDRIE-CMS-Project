import React, { useState,useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
//import Client from '../client'
import axios from 'axios'
//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const BarChart = () => {
  const keys = []
  const values = []
  // var dict = {
  //   'Z 1': 13,
  //   'Z 2': 10,
  //   'Z 3': 4,
  //   'Z 4': 8,
  //   'Z 5': 9,
  //   'Z 6': 10,
  //   'Z 7': 7,
  //   'Z 8': 5,

  
  
  const [zoneDetails,setZoneDetails] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3001/').then((response)=>{
            setZoneDetails(response.data);        })
    },[]);
    zoneDetails.map((val,key)=>{
      keys.push(val.Names);
      values.push(val.Numbers)
      
    })
     
  return (
    <div style={{
      position: 'absolute',
        top: '90px',
        right: 0,
        width: '670px',
        height: '300px',
        border: '3px solid #73AD21',
        flex:1,
        display:'flex',
        flexDirection:'row',  
        
    }}>
      
       <div style={{
            background:'Blue',
            position: 'absolute',
            width: '670px',
            height: '20px',
            color: 'white',
            textAlign: 'center'

        }}>
           ZONE ISSUES
        </div>
        <div style={{
          position: 'absolute',
          top: 20,
          right: 0,
          width: '670px',
          height: '280px',
          
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
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={200}
        width={300}
       
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