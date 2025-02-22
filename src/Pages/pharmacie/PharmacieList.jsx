import React from "react";
import Pharmacy from "./Pharmacy";
import * as Logos from "../../Images/images";
import "./pharmacie.css"
function PharmacieList() {
  const list = [
    {
      logo: Logos.pLogo1,
      name: "ENAMEN",
      rating: 4.6,
      type: "Pharmacy",
      state: "Open",
      id: 1,
    },
    {
      logo: Logos.pLogo2,
      name: "Mount Zion",
      rating: 4.7,
      type: "Pharmacy",
      state: "Open",
      id: 2,
    },
  ];
  return (
    <div className="pharmacie-page">
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
  );
}

export default PharmacieList;
