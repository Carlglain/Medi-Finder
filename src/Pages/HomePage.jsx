import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search"
import axios from "axios";
import "./App.css"
import AllServices from "./AllServices";

function HomePage() {
  useEffect(()=>{
    axios.get('https://api.example.com/get-all-services')
   .then(res=>console.log(res.data))
  },[])
  function handleSearch(){
    console.log("Search triggered")
    // Trigger a search in the backend or API
    // Update the search results in the App component
  }
  return (
    <div className="home-page">
      
     <div className="header-content">
      <h1>Welcome to MediFinder!</h1>
      
      <h3>Your Gateway to Local Pharmacies and Healthcare</h3>
      <h4>Your Trusted Companion in Navigating the Healthcare
      Landscape.</h4>
      {/* this cta button should link to pharmacy or where the user can search */}
     <button className="call-to-action-btn"><Link to='/pharmacy'>Find a Pharmacy</Link></button>
      </div>
      <section className="home-page-section">
      <h1 className="services">Why Choose Us?</h1>
      <AllServices />
      </section>
      <section className="home-page-section">
      <p className="conv-statement">
        Join us on your journey to better health and ensure you never miss an
        essential prescription again!
      </p>
      <Search />
      </section>
      <section className="home-page-section">
      <h1 className="h1">Most Rated Pharmacies</h1>
      {/* put pharmacies here */}
      </section>
     
     <p>This is fapshi </p>
    </div>
  );
}

export default HomePage;
