import React from 'react'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
import '../css/Header.css'
import logo from '../assets/logo3.png'

function Header() {

  return (
    <header className='d-flex flex-column flex-lg-row justify-content-between align-items-center container-fluid container-md px-2 px-sm-4 px-md-0 py-1 w-100 header'>
      <div className='d-flex justify-content-between align-items-center nav-con'>
         <div className='logo'>
          <img src={logo} alt="logo" />
         </div>
         <Navbar />
      </div>
      <div className='form-con'>
         <SearchForm  />
      </div>
    </header>
  )
}

export default Header