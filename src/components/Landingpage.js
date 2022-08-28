import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../assets/img4.png'

const Landingpage = () => {
  return (
        <section className="hero w-1oo d-flex flex-column flex-md-row align-items-center justify-content-between container-fluid container-sm mt-4 ">
            <div className="text w-100 w-md-50 d-flex flex-column align-items-center align-items-md-stretch px-2 px-sm-0">
                <div>
                    <h1 className='mt-3 mt-sm-0'>Let's Start Cooking With Popular Recipes</h1>
                    <p className='mt-3 mb-2'>Want to learn cooking but don't now how to start?</p>
                    <p>Don't worry, we have got you covered!</p>
                </div>
                <div>
                <Link to='/recipes' className="btn btn-md btn-primary mt-2">EXPLORE RECIPES</Link>
                </div>
            </div>
            <div className="img w-100 w-md-50 mt-4 mt-md-3 mt-0 mb-5 mb-md-0">
                <img src={Img} alt="img" className='w-100' />
            </div>
        </section>
  )
}

export default Landingpage