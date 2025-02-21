import React from "react";
import { Link } from "react-router-dom";
import ServiceOffered from "../Components/ServiceOffered";
import drugs from "../Images/drugs.jpg"
function HomePage() {
  return (
    <div>
      <h1>Welcome to MediFinder!</h1>
      <h3>Your Gateway to Local Pharmacies and Healthcare</h3>

      <ServiceOffered image={drugs} title="Convinience" content="Discover the power of convenience with MediFinder! 🌟" />
      <ServiceOffered image={drugs} title="Easy Search" content="Explore active pharmacies, view available medications, and unlock a
        world of healthcare resources—all at your fingertips! " />
      <ServiceOffered image></ServiceOffered>
      <p>
        Join us on your journey to better health and ensure you never miss an
        essential prescription again!
        <br />
        Let MediFinder be your trusted companion in navigating the healthcare
        landscape.
      </p>
    </div>
  );
}

export default HomePage;
