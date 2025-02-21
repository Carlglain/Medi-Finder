import React from 'react'
import "./service-offered.css"
function ServiceOffered({image,title,content}) {
  return (
    <div className='service-container'>
      <img className='image' src={image} alt="broken image" />
      <div className='description'>
      <h1>{title}</h1>
      <p>{content}</p>
      </div>
    </div>
  )
}

export default ServiceOffered
