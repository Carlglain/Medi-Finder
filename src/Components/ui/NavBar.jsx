import React from 'react'
import { NavLink} from 'react-router-dom';
import './NavBar.css';
import MediLogo from '../MediLogo';

function NavBar() {
  return (
    <header>
     <MediLogo />
      <nav>
        <ul>
          {/* replace Go with a material ui search icon */}
          <li><span ><input  /> <button>Go</button>  </span></li>
          <li><NavLink className='na-link' to='#'>Emergency</NavLink></li>
          <li><NavLink className='na-link' to='#'>Drugs</NavLink></li>
          <li><NavLink className='na-link' to='#'>About Medifinder</NavLink></li>
          <li><NavLink className='na-link' to='#'>Login</NavLink></li>
          {/* use material ui icons to open or close the nav bar */}
          {/* <button>Close</button>  */}
        </ul>
        {/* <button>Open</button> */}
      </nav>
    </header>
  )
}

export default NavBar
