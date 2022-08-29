import {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LikedContext from '../store/liked-context';

const RecipeCard = ({recipe, liked}) => {
  const [like, setLike] = useState(false)
  const navigate = useNavigate();

  const LikedCtx = useContext(LikedContext);
    const IsLiked = LikedCtx.is(recipe.id);

    const trunc = recipe.title.split(' ')
    let res;
    if (trunc.length > 3) {
      res = `${trunc[0]} ${trunc[1]} ${trunc[2]}...`
    } else {
      res = recipe.title
    }

    const handleClick = () => {
      setLike(!like)
      if (IsLiked) {
        LikedCtx.remove(recipe.id)
    } else {
        LikedCtx.add({
         id: recipe.id,
         title: recipe.title,
         image: recipe.image,
        });
    }
    }

    const clickMe = () => {
      navigate('/RecipesApp/summary/' + recipe.id)
    }

  return (
        <div className="recipe-details">
              <img src={recipe.image} className="cards-img" onClick={clickMe} alt="..." />
      <div className="pt-2 px-2 pb-0 cards-text">
        <p className="text-center">{res}</p>
      </div>
      <div className='w-100 d-flex justify-content-center align-items center'>

     { liked? (
        <button className={`like-button ${ like ? '' : 'active'}`} onClick={handleClick}>{ like? 'Like' : 'Liked'}</button>
     ) :( <button className={`like-button ${ like ? 'active' : ''}`} onClick={handleClick}>{ like? 'Liked' : 'Like'}</button>)
     
     }
      </div>
        </div>
  )
}

export default RecipeCard