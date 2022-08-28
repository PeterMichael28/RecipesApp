import {useState} from 'react'
import { useNavigate } from 'react-router'

const SearchForm = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search/' + input)
  }

  return (
    <form onSubmit={handleSubmit} className='d-block d-md-flex form w-100'>
        <input className='input p-1 px-2' 
            type="text" 
            placeholder='search recipe'
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
         />
        <button className='form-btn btn-primary p-1'>Search</button>
    </form>
  )
}

export default SearchForm