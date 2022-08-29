import React from 'react'
import { useNavigate } from 'react-router'

const Back = () => {
const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }

  return (
    <div className='back d-flex align-items-center p-0' onClick={handleClick}>
        <i class="bi bi-arrow-left me-2"></i> 
        <span className='p-0 m-0'>Go Back</span> 
    </div>
  )
}

export default Back