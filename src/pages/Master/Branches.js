import React from 'react'
import './branches.css'
function Branches() {
  return (
    <div>
      <a href="/Home">Home /</a>
      <a href="/Master">Master /</a>
      <a href="/Master/Branches">Branches /</a>
      <a href="/Master/Branches">Devices</a>
      <form>
        <div className='center'>
        <div className='left-side'>
      <table>
      <tr>
      <td align="right">Device ID </td>
      <td align="left"><input type="text" name="deviceid" required/></td>
      </tr> 
      <tr>
      <td align="right">Date of Installation </td>
      <td align="left"><input type="text" name="dateofinstall" required/></td>
      </tr>
      <tr>
      <td align="right">Warranty Period </td>
      <td align="left"><input type="text" name="rwarranty" required/></td>
      </tr>
      <tr>
      <td align="right">Hardware Version </td>
      <td align="left"><input type="text" name="hardwareversion" required/></td>
      </tr>
      <tr>
      <td align="right">Software Version </td>
      <td align="left"><input type="text" name="softwareversion" required/></td>
      </tr>
      <tr>
      <td align="right"></td>
      <td align="left"><input type="button" class ="btn-network" value="   Network   "></input></td>
      </tr>
      <tr>
      <td align="right">IP Address </td>
      <td align="left"><input type="text" name="ipaddress" required/></td>
      </tr>
      <tr>
      <td align="right">Modern IP</td>
      <td align="left"><input type="text" name="modernip" required/></td>
      </tr>
      <tr>
      <td align="right">Wi-Fi SSID </td>
      <td align="left"><input type="text" name="wifissid" required/></td>
      </tr>
      <tr>
      <td align="right">Password </td>
      <td align="left"><input type="text" name="password" required/></td>
      </tr>
      <tr>
      <td align="right">GSM Number</td>
      <td align="left"><input type="text" name="gsmnumber" required/></td>
      </tr>
      <tr>
      <td align="right">DVR IP</td>
      <td align="left"><input type="text" name="dvrip" required/></td>
      </tr>
      <tr>
      <td align="right">DVR Port</td>
      <td align="left"><input type="text" name="dvrport" required/></td>
      </tr>
     </table>
     </div>
     <div className='middle'>
     <input type="button" class ="btn-code" value="Branch Name -Code"></input>
     <select>
     <option value = "previous"> Last Updated  </option>  
     <option value = "Last"> Previously Updated   </option>  
     </select>
     <textarea name='remarks' className='text1' placeholder="Remarks"></textarea>

     </div>
     <div className='right-side'>
     <table>
      <tr>
      <td align="right">Zone 1 </td>
      <td align="left"><input type="text" name="zone1" value={'Shutter Contact'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 2 </td>
      <td align="left"><input type="text" name="zone2" value={'Panic Button'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 3 </td>
      <td align="left"><input type="text" name="zone3" value={'Motion Sensor - Gate'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 4 </td>
      <td align="left"><input type="text" name="zone4" value={'Window Contacts'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 5 </td>
      <td align="left"><input type="text" name="zone5" value={'Vibration Sensor'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 6 </td>
      <td align="left"><input type="text" name="zone6" value={'Gate Keeper'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 7</td>
      <td align="left"><input type="text" name="zone7" value={'Shutter Contact'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 8 </td>
      <td align="left"><input type="text" name="zone8" value={'Shutter Contact'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 9 </td>
      <td align="left"><input type="text" name="zone9" value={'Shutter Contact'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
      <tr>
      <td align="right">Zone 10 </td>
      <td align="left"><input type="text" name="zone10" value={'Shutter Contact'} readOnly/></td>
      <select class="state">
      <option value = "active" class="active"> Active </option>  
      <option value = "bypassed" class="bypass" > Bypassed   </option>  
      <option value = "disabled" class='disable'> Disabled   </option>  
      </select>
      </tr> 
     </table> 
     </div>
     </div>
     <div className='btn'>
     <input type="submit" class ="btn-form" value="Save"></input>
     <input type="submit" class ="btn-form" value="Close"></input></div>
      </form>
    </div>
  )
}

export default Branches