import React, { useState,useEffect } from "react";
import Pharmacy from "./Pharmacy";
import * as Logos from "../../Images/images";
import "./pharmacie.css"
import axios from 'axios';

function PharmacieList() {
  const [pharmacies,setPharmacies] =useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const FetchData = async ()=>{
    try{
      const response = await axios.get("http://localhost/api/units")
      console.log(response.data)
      setPharmacies(response.data)
    }
    catch(error){
      console.error(error)
    }
    finally{
      setLoading(false);
    }
  }
  FetchData();
  },[])
  const pharmacyStatus=()=>{
    const currentHour = new Date().getHours();
    const currentDay = new Date().getDay();
   
    //the numbers on the condition below should be dependent on the pharmacy. 
    if (currentHour >8 && currentHour< 20){
      if(currentDay != 1 ){
      return "Open"
    }
    else{
      return "Close"
    }
    }
    else{
      return "Close"
    }
  }
  const list = [
    {
      logo: Logos.pLogo1,
      name: "ENAMEN",
      rating: 4.6,
      type: "Pharmacy",
      state: pharmacyStatus(),
      id: 1,
  
    },
    {
      logo: Logos.pLogo2,
      name: "Mount Zion",
      rating: 4.7,
      type: "Pharmacy",
      state: pharmacyStatus(),
      id: 2,
    },
    {
      logo: Logos.pLogo1,
      name: "ENAMEN",
      rating: 4.6,
      type: "Pharmacy",
      state: pharmacyStatus(),
      id: 3,
    },
  ];


  if(loading){
    return <div className="loading">Loading...</div>
  }
  return (
    <div className="body">
    <div className="pharmacie-page ">
      
      {list.map((pharmacie) => (
        <div>
          <Pharmacy
            key={pharmacie.id}
            logo={pharmacie.logo}
            name={pharmacie.name}
            type={pharmacie.type}
            rating={pharmacie.rating}
            state={pharmacie.state}
          />
        </div>
      ))}
    </div>
    </div>
  );
}

export default PharmacieList;
