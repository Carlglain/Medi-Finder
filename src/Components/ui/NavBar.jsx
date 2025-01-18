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
     <MediLogo />
      <nav>
        <ul>
          {/* replace Go with a material ui search icon */}
          <li><span className='na-link' ><input  /> <button>Go</button>  </span></li>
          <li><NavLink className='na-link' to='#'>Emergency</NavLink></li>
          <li><NavLink className='na-link' to='#'>Drugs</NavLink></li>
          <li><NavLink className='na-link' to='#'>About Medifinder</NavLink></li>
          <li><NavLink id='l-user' className='na-link' to='#'>Login </NavLink> <label htmlFor="l-user"><AccountCircleIcon fontSize='medium'/></label></li>
          {/* use material ui icons to open or close the nav bar */}
          <button><CloseIcon /></button> 
        </ul>
        <button><MenuIcon /></button>
      </nav>
    </header>
  )
}

export default NavBar
