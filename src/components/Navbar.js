import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand'>
       <ul className='navbar-nav'>
        <li className='nav-item'>
            <Link to='/' className='nav-link' href="#/">Home</Link>
        </li>
        <li className='nav-item'>
            <Link to='/recipes' className='nav-link' href="#/">Recipes</Link>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#/">Liked Recipes</a>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar