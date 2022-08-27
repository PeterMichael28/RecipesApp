import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand'>
       <ul className='navbar-nav'>
        <li className='nav-item'>
            <a className='nav-link' href="#/">Home</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#/">Recipes</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#/">Your Liked Recipes</a>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar