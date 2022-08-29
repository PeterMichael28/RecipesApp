import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'


const SmRecipes = ({data, p, h1, liked}) => {
  return (
    <section className='someRecipes container-fluid container-sm d-flex flex-column align-items-center justify-content-center mt-4 w-100'>
      <div className='someRecipes-title text-center'>
        <h1 className=''>{h1}</h1>
        <h3>We provide a variety of food and beverage recipes with high taste from famous chefs</h3>
      </div>
        <div className='card-container d-flex flex-wrap align-items-center justify-content-center justify-content-sm-around justify-content-md-between w-100'>
            {data.map((recipe) => {
                return (
                  <div className='cards d-flex' key={recipe.id}>
                      <RecipeCard recipe={recipe} liked={liked}   />
                  </div>
                )
            })}
        </div>
        <div className='w-100 container mt-3'>
          <Link to='/RecipesApp/recipes' className='see-more pb-1'>{p}</Link>
        </div>
    </section>
  )
}

export default SmRecipes