import React from 'react'

const RecipeCard = ({recipe}) => {

    const trunc = recipe.title.split(' ')
    let res;
    if (trunc.length > 3) {
      res = `${trunc[0]} ${trunc[1]} ${trunc[2]}...`
    } else {
      res = recipe.title
    }

  return (
        <div className="cards">
              <img src={recipe.image} className="" alt="..." />
      <div className="pt-2 px-2 pb-1">
        <p className="text-center">{res}</p>
      </div>
        </div>
  )
}

export default RecipeCard