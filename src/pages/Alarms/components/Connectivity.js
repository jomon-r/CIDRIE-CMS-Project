import React from 'react'
import Net from '../images/4G.png'
import wifi from '../images/wifi.png'
import wire from '../images/wire.png'

function Connectivity() {
    var dict = {
        'Net': 122,
        'Wifi': 142,
        'Wire': 134,    
      }
    return (
      
    <div style={{
        background:'white',
        position: 'absolute',
        top: '90px',
        right: 680,
        width: '220px',
        height: '300px',
        border: '3px solid #73AD21',  
        flex:1,
        display:'flex',
        flexDirection:'column',  
        
    }}>
        <div style={{
            background:'Blue',
            position: 'absolute',
            width: '220px',
            height: '20px',
            color: 'white',
            textAlign: 'center'

        }}>
           CONNECTIVITY
        </div>
        
        <div style={{
        flex:1,
        display:'flex',
        flexDirection:'row',  
        alignItems: 'stretch',
    }}>
        <img src={Net} alt="Net" style={{height:70,width:70,margin:12,marginTop:35}} />
        <h1 style={{marginTop:40}}>{dict['Net']}</h1>
     </div>
     <div style={{
        flex:1,
        display:'flex',
        flexDirection:'row',  
        
    }}>
        <img src={wifi} alt="wifi" style={{height:70,width:70,margin:12 }}/>
        <h1>{dict['Wifi']}</h1>
    </div>
    <div style={{
        flex:1,
        display:'flex',
        flexDirection:'row',  
        
    }}>
        <img src={wire} alt="wire" style={{height:70,width:70,margin:12}}/>
        <h1>{dict['Wire']}</h1>
</div>
    </div>
  )
}

export default Connectivity