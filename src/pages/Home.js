import React, { useEffect, useState } from 'react'
import Landingpage from '../components/Landingpage';
import SmRecipes from '../components/SmRecipes';
import '../css/Home.css'

const Home = () => {
    const [data, setData] = useState([])

   
    useEffect(() => {
        const getData = async () => {

            const check = localStorage.getItem('someRecipe')

            if (check) {
                setData(JSON.parse(check))
            } else {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
                const result = await api.json()
                localStorage.setItem('someRecipe', JSON.stringify(result.recipes))
                setData(result.recipes)
                // console.log(result.recipes)
            }   
        }
        getData()
        // console.log(data)
    }, [])

  return (
    <main className="">
        <Landingpage />
        <SmRecipes data={data} h1='SOME OF OUR RECIPES' p='See More Recipe...'  /> 
    </main>
  )
}

export default Home