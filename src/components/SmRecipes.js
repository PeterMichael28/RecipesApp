import React from 'react'
import RecipeCard from './RecipeCard'

const SmRecipes = ({data, p, h1}) => {
  return (
    <section className='someRecipes container-fluid container-sm d-flex flex-column align-items-center justify-content-center mt-4 w-100'>
      <div className='someRecipes-title text-center'>
        <h1 className=''>{h1}</h1>
        <h3>We provide a variety of food and beverage recipes with high taste from famous chefs</h3>
      </div>
        <div className='card-container d-flex flex-wrap align-items-center justify-content-center justify-content-sm-around justify-content-md-between w-100'>
            {data.map((recipe,i) => {
                return (
                    <RecipeCard recipe={recipe} key={i} />
                )
            })}
        </div>
        <div className='w-100 container'>
          <p>{p}</p>
        </div>
    </section>
  )
}

export default SmRecipes