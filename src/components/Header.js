import React from 'react'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
import '../css/Header.css'

function Header() {

  return (
    <header className='d-flex justify-content-between align-items-center container-fluid container-sm py-1'>
         <h4>Logo</h4>
         <Navbar />
         {/* <SearchForm /> */}
    </header>
  )
}

export default Header