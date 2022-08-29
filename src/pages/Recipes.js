import React, { useEffect, useState } from 'react'
import Landingpage from '../components/Landingpage';
import SmRecipes from '../components/SmRecipes';

const Recipes = () => {

    const [data, setData] = useState([])

   
    useEffect(() => {
        const getData = async () => {

            const check = localStorage.getItem('Recipe')

            if (check) {
                setData(JSON.parse(check))
            } else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16`)
                const result = await api.json()
                localStorage.setItem('Recipe', JSON.stringify(result.recipes))
                setData(result.recipes)
                // console.log(result.recipes)
            }   
        }
        getData()
        // console.log(data)
    }, [])

  return (
    <main className='margin-t'>
       {data && <SmRecipes data={data} h1='OUR RECIPES' />} 
    </main>
  )
}

export default Recipes