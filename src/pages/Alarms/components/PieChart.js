import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const PieChart = () => {
  
  var dict = {
    'Panic Button': 52,
    'Keypad': 40,
    'Battery': 64,
    'Hooter': 80,
    'Panel': 23,
    'Shutter Contact': 78

  }
  const keys = Object.keys(dict);
  const values = Object.values(dict)
  return (
    <div style={{
        position: 'absolute',
        top: '64%',
        //right: 920,
        left: 0,
        width: '29.4%',
        height: '42%',
        border: '3px solid #73AD21',
    }}>
      <div style={{
            background:'Blue',
            position: 'absolute',
            width: '100%',
            height: '7%',
            color: 'white',
            textAlign: 'center'

        }}>
           TICKET RAISED
        </div>
        <div style={{
          position: 'absolute',
          top: '7%',
          left: 0,
          width: '74%',
          height: '90%',
          
        }}>
      <Pie
        data={{
          labels: keys,
          datasets: [
            {
              label: '# of votes',
              data: values,
              backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255,1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
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
      /></div>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '70%',
        width: '70%',
        height: '100%',
        flex:2,
        //display:'flex',
        flexDirection:'column', 

      }}>
          <h6>Panic Button: {dict['Panic Button']}</h6> 
          <h6>Keypad: {dict['Keypad']}</h6> 
          <h6>Battery: {dict['Battery']}</h6>
          <h6>Hooter: {dict['Hooter']}</h6>
          <h6>Panel: {dict['Panel']}</h6>
          <h6>Shutter Contact: {dict['Shutter Contact']}</h6>
          
      </div>
    </div>
  )
}

export default PieChart