import React from 'react';
import './pharmacie.css';

function Pharmacy({ logo, name, rating, type, state }) {
  return (
    <div className='pharmacie-container'>
      
        <img className='logo' src={logo} alt={`${name} logo`} />
        
        <div className='content'>
        <h3>{name}</h3>
        <p>Rating: {rating}</p>
        <p>Type: {type}</p>
        <p>Status: {state}</p>
        
      </div>
    </div>
  );
}

export default Pharmacy;