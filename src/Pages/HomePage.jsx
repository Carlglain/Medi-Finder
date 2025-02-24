import React from "react";
import { Link } from "react-router-dom";


import Search from "../Components/Search"
import "./App.css"
import AllServices from "./AllServices";

function HomePage() {
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
      <AllServices />
      <p>
        Join us on your journey to better health and ensure you never miss an
        essential prescription again!
      </p>
      <Search />
      <h1 className="h1">Most Rated Pharmacies</h1>
      {/* put pharmacies here */}
     
     
    </div>
  );
}

export default HomePage;
