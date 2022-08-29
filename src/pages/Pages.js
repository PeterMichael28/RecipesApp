import React from 'react'
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import Recipes from './Recipes';
import Search from './Search';
import RecipeDetails from './RecipeDetails';
import Liked from './Liked';


const Pages = () => {
  return (
    <Routes>
      <Route path="/RecipesApp" element={<Home />} />
      <Route path="/RecipesApp/recipes" element={<Recipes />} />
      <Route path="/RecipesApp/search/:input" element={<Search />} />
      <Route path="/RecipesApp/summary/:id" element={<RecipeDetails />} />
      <Route path="/RecipesApp/likedrecipes" element={<Liked />} />
    </Routes>
        
   
  )
}

export default Pages