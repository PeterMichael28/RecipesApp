import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  const [like, setLike] = useState(false)
  const navigate = useNavigate()

    const trunc = recipe.title.split(' ')
    let res;
    if (trunc.length > 3) {
      res = `${trunc[0]} ${trunc[1]} ${trunc[2]}...`
    } else {
      res = recipe.title
    }

    const handleClick = () => {
      setLike(!like)
      console.log(like)
    }

    const clickMe = () => {
      navigate('/summary/' + recipe.id)
    }

  return (
        <div className="recipe-details">
              <img src={recipe.image} className="cards-img" onClick={clickMe} alt="..." />
      <div className="pt-2 px-2 pb-0 cards-text">
        <p className="text-center">{res}</p>
      </div>
      <div className='w-100 d-flex justify-content-center align-items center'>

      <button className={`like-button ${ like ? 'active' : ''}`} onClick={handleClick}>{ like? 'Liked' : 'Like'}</button>
      </div>
        </div>
  )
}

export default RecipeCard