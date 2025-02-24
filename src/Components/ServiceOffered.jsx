import React from 'react'
import "./service-offered.css"
import { Link } from 'react-router-dom'
function ServiceOffered({image,title,content,link}) {
  return (
    <div className="service-container">
      <Link id="label" className="link-dec" to={link}>
      <img className="image" src={image} alt="Service representation" />
      </Link>
    <div className="description">
      <h1>
      <Link id="label" className="link-dec" to={link}>
          {title}
          </Link>
      </h1>
      <Link id="label" className="link-dec" to={link}>
      <p>{content}</p>
      </Link>
    </div>
  </div>
  )
}

export default ServiceOffered
