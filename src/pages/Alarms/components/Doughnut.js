import React from 'react'
import { Doughnut } from 'react-chartjs-2'

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const Dough = () => {
  var dict = {
    'Offline': 10,
    'Online': 20,

  }
  const keys = Object.keys(dict);
  const values = Object.values(dict)
  return (
    <div style={{
        position: 'absolute',
        top: '14.5%',
        //right: 960,
        left: 0,
        width: '29.4%',
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
           ALARM ONLINE STATUS
        </div>
        <div style={{
          position: 'absolute',
          top: 30,
          left: 0,
          width: '75%',
          height: '85%',
          
        }}>
      <Doughnut
        data={{
          labels: keys,
          datasets: [
            {
              label: '# of votes',
              data: values,
              backgroundColor: [
                'rgba(0, 128 ,0 ,1)',
                'rgba(255, 0, 0, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
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
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '72%',
        width: '72%',
        height: '92%',
        flex:1,
        display:'flex',
        flexDirection:'column', 

      }}>
          <h3>Online: {dict['Offline']}</h3>
          <h3>Offline: {dict['Online']}</h3>
      </div>
    </div>
  )
}

export default Dough