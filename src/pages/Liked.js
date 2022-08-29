import React, { useEffect, useState, useContext } from 'react'
import Landingpage from '../components/Landingpage';
import SmRecipes from '../components/SmRecipes';
import LikedContext from '../store/liked-context';

const Liked = () => {
    const [data, setData] = useState([])
    const LikedCtx = useContext(LikedContext);
    let LikedLength = LikedCtx.total;

    console.log(LikedCtx.liked)

  return (
    <main className="margin-t">
      { LikedLength <= 0 ? <h4 className='container mt-5'>No liked Recipe yet, Click on the like button to like a recipe</h4>  : <SmRecipes data={LikedCtx.liked} h1='YOUR LIKED RECIPES' liked={true}  /> }
    </main>
  )
}


export default Liked;