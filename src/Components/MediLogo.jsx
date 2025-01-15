import React from 'react'
import PhamLogo from '../Images/picon.png';
import './Medilogo.css'
function MediLogo() {
  return (
    <div className='mediLogo'>
      <img  src={PhamLogo} alt='pharmacypic' />
      <h1>Medi-Finder</h1>
    </div>
  )
}

export default MediLogo
