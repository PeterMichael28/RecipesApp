import React from 'react'
import logo from '../assets/logo3.png'
import '../css/Footer.css'

const Footer = () => {
  return (
   <footer className='footer p-3 pb-0 mb-0 d-flex flex-column align-items-center justify-content-center mt-4'>
        <div className='mb-0 pb-0'><img src={logo} alt="logo" className='w-100 mb-0 pb-0' /></div>
        <h4>Copyright © 2022 Michael</h4>
   </footer>
  )
}

export default Footer