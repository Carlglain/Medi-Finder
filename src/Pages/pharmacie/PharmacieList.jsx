import React, { useState,useEffect } from "react";
import Pharmacy from "./Pharmacy";
import * as Logos from "../../Images/images";
import "./pharmacie.css"
import axios from 'axios';
import Search from "../../Components/Search";
// const ApiUrl = `${import.meta.env.VITE_BASE_URL}/api/${url}`
function PharmacieList() {
  const [pharmacies,setPharmacies] =useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const FetchData = async ()=>{
    try{
      const response = await axios.get("https://rrn24.techchantier.site/Medi-finder/public/api/medical-facilities")
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
  
  if(loading){
    return <div className="loading">Loading...</div>
  }
  return (
    <div className="body">
      <div className="search">
      <Search />
      </div>
    <div className="pharmacie-page ">
    
      {pharmacies.map((pharmacie) => (
        <div>
          <Pharmacy
            key={pharmacie.user.id}
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
