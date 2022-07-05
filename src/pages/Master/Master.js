import React from 'react'
import './master.css'
function Master() {
  return (
    <div>
      <a href="/Home">Home /</a>
      <a href="/Master">Master /</a>
      <a href="Master/Branches">Branches </a>
      <form>
        <div className='center'>
        <div className='left-side'>
      <table>
      <tr>
      <td align="right">Branch Name </td>
      <td align="left"><input type="text" name="branch" required/></td>
      </tr> 
      <tr>
      <td align="right">Code </td>
      <td align="left"><input type="text" name="code" required/></td>
      </tr>
      <tr>
      <td align="right">Region </td>
      <td align="left"><input type="text" name="region" required/></td>
      </tr>
      <tr>
      <td align="right">Hub </td>
      <td align="left"><input type="text" name="hub" required/></td>
      </tr>
      <tr>
      <td align="right">Vertical </td>
      <td align="left"><input type="text" name="vertical" required/></td>
      </tr>
      <tr>
      <td align="right">Zone </td>
      <td align="left"><input type="text" name="zone" required/></td>
      </tr>
      <tr>
      <td align="right">State </td>
      <td align="left"><input type="text" name="state" required/></td>
      </tr>
      <tr>
      <td align="right">District </td>
      <td align="left"><input type="text" name="district" required/></td>
      </tr>
      <tr>
      <td align="right">City </td>
      <td align="left"><input type="text" name="city" required/></td>
      </tr>
      <tr>
      <td align="right">Building Name </td>
      <td align="left"><input type="text" name="buildname" required/></td>
      </tr>
      <tr>
      <td align="right">Pin Code</td>
      <td align="left"><input type="text" name="pincode" required/></td>
      </tr>
     </table>
     </div>
     <div className='right-side'>
     <table>
      <tr>
      <td align="right">Risk Category </td>
      <td align="left"><input type="text" name="risk" required/></td>
      </tr> 
      <tr>
      <td align="right">Branch Locality </td>
      <td align="left"><input type="text" name="locality" required/></td>
      </tr>
      <tr>
      <td align="right">Post Office </td>
      <td align="left"><input type="text" name="postoffice" required/></td>
      </tr>
      <tr>
      <td align="right">Mail Address </td>
      <td align="left"><input type="email" name="mail" required/></td>
      </tr>
      <tr>
      <td align="right">Contact Person</td>
      <td align="left"><input type="text" name="conperson" /></td>
      </tr>
      <tr>
      <td align="right">Mobile Number </td>
      <td align="left"><input type="number" name="mobile"  /></td>
      </tr>
      <tr>
      <td align="right">Branch Land Phone</td>
      <td align="left"><input type="number" name="landphone" /></td>
      </tr>
      <tr>
      <td align="right">Branch Mobile </td>
      <td align="left"><input type="number" name="branchmobile"/></td>
      </tr>
      <tr>
      <td align="right">Current Status </td>
      <td align="left"><input type="text" name="status" required/></td>
      </tr>
      <tr>
      <td align="right">Support Type </td>
      <td align="left"><input type="text" name="supporttype" required/></td>
      </tr>
      <tr>
      <td align="right">Connectivity Type</td>
      <td align="left"><input type="text" name="contype" required/></td>
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

export default Master