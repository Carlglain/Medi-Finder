import React from 'react'
import './pharmacie.css'
function Pharmacy({logo,name,rating,type,state}) {
  return (
    <div className='pharmacie-container'>
    <div className='pharmacie'>
    <img src={logo} alt="logo" />
    <p>Name:{name}</p>
    <p>{rating}</p>
    <p>{type}</p>
    <p>{state}</p>
    </div> 
   
    </div>
  )
}

export default Pharmacy
