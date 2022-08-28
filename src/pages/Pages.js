import React from 'react'
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import Recipes from './Recipes';
import Search from './Search';
import RecipeDetails from './RecipeDetails';


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/search/:input" element={<Search />} />
      <Route path="/summary/:id" element={<RecipeDetails />} />
    </Routes>
        
   
  )
}

export default Pages