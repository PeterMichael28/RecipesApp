import React from 'react'
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import Recipes from './Recipes';


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
        
   
  )
}

export default Pages