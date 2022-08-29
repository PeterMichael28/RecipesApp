import { useContext } from 'react'
import {Link} from 'react-router-dom'
import LikedContext from '../store/liked-context'

const Navbar = () => {

  const LikedCtx = useContext(LikedContext)
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
            <Link to='/likedrecipes' className='nav-link badge-con' href="#/">Liked Recipes <span className='like-badge'>{LikedCtx.total}</span></Link>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar