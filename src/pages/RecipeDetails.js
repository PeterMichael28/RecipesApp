
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Back from '../components/Back'
import SmRecipes from '../components/SmRecipes'
import '../css/RecipeDetails.css'

const RecipeDetails = () => {
    const { id } = useParams()

    
    const [data, setData] = useState({})
    const [msg, setMsg] = useState('summary')

   
    useEffect(() => {
        const getData = async () => {

                const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
                const result = await api.json()
                setData(result)
                //  console.log(result)
        }
        getData()
        // console.log(data)
    }, [])

  return (
    <section className="container-fluid container-sm recipe-details px-4 px-md-5 px-lg-0 margin-t">
     <Back />
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-11 col-lg-5 px-3 px-md-0 recipe-details-box1 me-lg-5 mb-4 mb-lg-0">
          <h3 className='mb-3'>{data && data.title}</h3>
          <img src={data && data.image} className="w-100" alt="img" />
        </div>
        <div className="col-12 col-md-11 col-lg-6 px-2 px-md-0 recipe-details-box2">
          <div className='mb-4'>
            <button className= {`button ${msg === 'summary'? 'active': ''}`} onClick={() => setMsg('summary')}>Summary</button>
            <button className={`${msg === 'instructions'? 'active': ''} button` }onClick={() => setMsg('instructions')}>Instructions</button>
          </div>

          <div>
            { msg === 'summary' &&  <p dangerouslySetInnerHTML={{__html: data.summary}}></p> }
            { msg === 'instructions' && <p dangerouslySetInnerHTML={{__html: data.instructions}}></p> }
          </div>

          {/* <h4>Summary</h4> */}
          {/* <p dangerouslySetInnerHTML={{__html: data.instructions}}></p> */}
          {/* <h3>Instructions</h3>
          <p>{data.instructions}</p> */}
        </div>
      </div>
    </section>
  )
}

export default RecipeDetails