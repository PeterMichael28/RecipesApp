import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Back from '../components/Back'
import SmRecipes from '../components/SmRecipes'

const Search = () => {
    const {input} = useParams()

    const [data, setData] = useState([])

   
    useEffect(() => {
        const getData = async (search) => {
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}&number=12`)
                const result = await api.json()
                setData(result.recipes)
                console.log(result.recipes) 
        }
        getData(input)
        // console.log(data)
    }, [input])
  return (
    <div className='margin-t'>
      <div>
        {data? <SmRecipes data={data} h1='Search Results' /> : <h4 className='container mt-5'>Loading search results...</h4>}
        </div>
    </div>
  )
}

export default Search