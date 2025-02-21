import React from 'react'
import Pharmacy from './Pharmacy'
import * as Logos from '../../Images/images'
function PharmacieList() {
    const list = [{logo:Logos.pLogo1,name:"ENAMEN",rating:"4.6",type:"Pharmacy",state:"Open"},
        {logo:Logos.pLogo2,name:"Mount Zion",rating:"4.3",type:"Pharmacy",state:"Open"}
    ]
  return (
    <div>
    {list.map((pharmacie, index) => {
      return <Pharmacy key={index} logo={pharmacie.logo} name={pharmacie.name} type={pharmacie.type} rating={pharmacie.rating} state ={pharmacie.state} />
})}
  </div>
  )
}

export default PharmacieList
