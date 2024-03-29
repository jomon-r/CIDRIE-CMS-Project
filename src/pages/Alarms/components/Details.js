import React from 'react'
import battery from '../images/battery.png'
import night from '../images/night.png'
import day from '../images/sun.png'
import maintain from '../images/maintain.png'

const Details = () => {
    var dict = {
        'day': 112,
        'night': 127,
        'maintain': 114,
        'battery': 130,
    
      }
    return (
        <div style={{
            background:'White',
            position: 'absolute',
            right:0,
            top: '64%',
            width: '69.5%',
            height: '42%',
            color: 'white',
            textAlign: 'center',
            border: '3px solid #73AD21',
    
        }}>
            <div style={{
                background:'Grey',
                position: 'absolute',
                right:0,
                width: '100%',
                height: '37%',
                color: 'white',
                textAlign: 'center',
                flex:1,
                display:'flex',
                flexDirection:'row',  
        
                

            }}>
                <img src={day} alt="day" style={{height:'50%',width:'10%',margin:'3%'}}/>
                <h1 style={{marginRight: '3%',marginTop:'3%'}}> {dict['day']} </h1>
                <img src={night} alt="night" style={{height:'50%',width:'10%',margin:'3%'}}/>
                <h1 style={{marginRight: '3%',marginTop:'3%'}}> {dict['night']}</h1>

                <img src={maintain} alt="maintain" style={{height:'50%',width:'10%',margin:'3%'}}/>
                <h1 style={{marginRight: '3%',marginTop:'3%'}}> {dict['maintain']} </h1>
                <img src={battery} alt="battery" style={{height:'50%',width:'10%',margin:'3%'}}/>
                <h1 style={{marginRight: '3%',marginTop:'3%'}}> {dict['battery']}</h1>

            </div>


        </div>
    )
} 
export default Details