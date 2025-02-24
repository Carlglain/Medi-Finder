import React, { useRef } from 'react'
import { NavLink} from 'react-router-dom';
import './NavBar.css';
import MediLogo from '../MediLogo';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
  const navRef = useRef()
  const showNavbar = () =>{
    if(navRef.current){
    navRef.current.classList.toggle('responsive-nav')
  }
  }
  return (
    <header className='header'>
    <NavLink style={{color: 'black', textDecoration:'none'}} to='/'><MediLogo/> </NavLink>
      <nav>
        <ul ref={navRef}>
          <li><NavLink className='na-link' to='/pharmacy'>Pharmacy</NavLink></li>
          <li><NavLink className='na-link' to='/emergency'>Emergency</NavLink></li>
          <li><NavLink className='na-link' to='/medics'>Medics</NavLink></li>
          <li><NavLink id='l-user' className='na-link' to='/account'>My account </NavLink> <label htmlFor="l-user"><AccountCircleIcon fontSize='medium'/></label></li>
          {/* use material ui icons to open or close the nav bar */}
         <li><button onClick={showNavbar} className='nav-btn nav-close-btn'><CloseIcon /></button> </li> 
        </ul>
         {/* replace Go with a material ui search icon */}
        
        <button onClick={showNavbar} className='nav-btn nav-open-btn'><MenuIcon /></button>
      </nav>
    </header>
  )
}

export default NavBar
