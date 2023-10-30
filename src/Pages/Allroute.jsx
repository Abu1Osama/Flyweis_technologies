import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Blog2 from '../Pages/Blog2';
import PeriodicService from './PeriodicService';
import Batteries from '../Components/Batteries';

function Allroute() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/blogs2" element={<Blog2/>}/>
        <Route path="/periodic" element={<PeriodicService/>}/>
      </Routes>
    
    </>
  )
}

export default Allroute