import React from 'react'
import { NavLink} from 'react-router-dom';
import './NavBar.css';
import MediLogo from '../MediLogo';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function NavBar() {
  return (
    <header>
    <NavLink style={{color: 'black', textDecoration:'none'}} to='/'><MediLogo/> </NavLink>
      <nav>
        <ul>
          <li><NavLink className='na-link' to='/pharmacy'>Pharmacy</NavLink></li>
          <li><NavLink className='na-link' to='/emergency'>Emergency</NavLink></li>
          <li><NavLink className='na-link' to='/medics'>Medics</NavLink></li>
          <li><NavLink id='l-user' className='na-link' to='/account'>My account </NavLink> <label htmlFor="l-user"><AccountCircleIcon fontSize='medium'/></label></li>
          {/* use material ui icons to open or close the nav bar */}
          <button><CloseIcon /></button> 
        </ul>
         {/* replace Go with a material ui search icon */}
        <div ><input  /> <button>Go</button>  </div>
        <button><MenuIcon /></button>
      </nav>
    </header>
  )
}

export default NavBar
