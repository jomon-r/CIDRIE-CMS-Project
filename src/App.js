import React from 'react'
import './App.css'
import {Chart as ChartJS} from 'chart.js/auto'
import Navbar from './navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Alarms from './pages/Alarms/Alarms'
import Complaints from './pages/Complaints/Complaints'
import Master from './pages/Master/Master'
import Report from './pages/Report/Report'
import Settings from './pages/Settings/Settings'
import SOS from './pages/SOS/SOS'
import Task from './pages/Task/Task'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Alarms' element={<Alarms/>} />
        <Route path='/Complaints' element={<Complaints/>} />
        <Route path='/Master' element={<Master/>} />
        <Route path='/Report' element={<Report/>} />
        <Route path='/Settings' element={<Settings/>} />
        <Route path='/SOS' element={<SOS/>} />
        <Route path='/Task' element={<Task/>}/>
      </Routes>
    </Router>
  );
}


export default App
