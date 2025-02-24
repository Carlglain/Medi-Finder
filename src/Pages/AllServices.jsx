import React from 'react'
import  "./App.css"
import ServiceOffered from "../Components/ServiceOffered";
import drugs from "../Images/drugs.jpg"
import drug1 from "../Images/pharmcy1.jpeg"

function AllServices() {
  return (
    <div >
      <ServiceOffered link="#" image={drugs} title="Convinience" content="Discover the power of convenience with MediFinder! 🌟" />
      <ServiceOffered link="/search" image={drugs} title="Easy Search" content="Explore active pharmacies, view available medications, and unlock a
        world of healthcare resources—all at your fingertips! " />
      <ServiceOffered link="/medics" image={drug1} title="View Medications" content="You can view medications in each pharmacy and amazingly the prices." />
      <ServiceOffered link="/emergency" image={drug1} title="Emergency" content="Save and Call in case of Emergency the Emergency contacts of the pharmacy" />
    </div>
  )
}

export default AllServices
