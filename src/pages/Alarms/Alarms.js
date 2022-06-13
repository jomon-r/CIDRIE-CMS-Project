import React from 'react'
import BarChart from './components/BarChart'
import Connectivity from './components/Connectivity'
import Dough from './components/Doughnut'
import PieChart from './components/PieChart'
import Topbar from './components/Topbar'
import Details from './components/Details'
//import {Chart as ChartJS} from 'chart.js/auto'

function Alarms() {
  return (
    <div>
        <Topbar/>
        <PieChart/>
        <BarChart/>
        <Dough/>
        <Connectivity/>
        <Details/>
    </div>
  )
}

export default Alarms