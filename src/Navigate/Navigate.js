import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route, useNavigate } from 'react-router-dom';
import About from '../Pages/About/About';
import Home1 from '../Pages/Home/Home1';
import Brandvaorigin from '../Pages/Home/Brandvaorigin';
import Brandpent from '../Pages/Home/Brandpent';
import BrandVa from '../Pages/Home/BrandVa';
import BrandWell from '../Pages/Home/BrandWell';
import Contact from '../Pages/ContactUs/Contact';
import LifeCube from '../Pages/Extracontent/LifeCube';
import Nootri from '../Pages/Extracontent/Nootri';
import Turtle from '../Pages/Extracontent/Turtle';
import Motioncare from '../Pages/Extracontent/Motioncare';
import PlayPark from '../Pages/Extracontent/PlayPark';


const Navigate = () => {



  return (
    <div>

      <Routes>
    
      
        <Route
            exact
            path="/"
            element={<Home1/>} />
               <Route path="/vaha" element={<Brandvaorigin />}></Route> 
        <Route path="/movement" element={<Brandpent />}></Route>
        <Route path="/pent." element={<BrandVa />}></Route>  
        <Route path="/well" element={<BrandWell />}></Route>
        <Route path="/contact" element={<Contact />}></Route>  
        <Route path="/aboutus" element={<About/> }></Route>  
        <Route path="/lifecube" element={<LifeCube/> }></Route>  
        <Route path="/Nootrie" element={<Nootri />}></Route>
        <Route path="/Turtlegym" element={<Turtle />}></Route>  
        <Route path="/Motioncare" element={<Motioncare />}></Route>
        <Route path="/PlayPark" element={<PlayPark/> }></Route>
      </Routes>
    </div>
  )
}

export default Navigate