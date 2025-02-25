import React from "react";
import "./myaccount.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Myaccount() {
  return (
    <div className="account-container">
      {/*
      favourites
      last visited */}
      {/* if user is logged in */}
      <div className="user-profile">
        <h1 className="blur-header">Current User </h1>
        <div>
          <AccountCircleIcon   /> 
          <span>User Name</span>
          <span className="user-name"> name here</span>
        </div>
        <hr />
        <div className="account-content">
          <div className="more-info">
        <h2 className="blur-header">More info</h2>
        <p>
          <span>Email</span> <span> email here</span>{" "}
        </p>
        <p>
          <span>Phone</span> <span> Phone number here</span>{" "}
        </p>
        <p>
          <span>Address</span> <span> Address here</span>{" "}
        </p>
        <button>Edit Profile</button>
          <button>Logout</button>
          </div>
        {/* if user is not logged in */}
        <div>
          <Link to="/login">Login Options</Link>
        </div>
    
      <div className="favourites">
        <h1>Your favourite pharmacy</h1>
        <p>data shows your'e a fan of </p>
        {/* <p>{fav-pharmacy}</p> */}
      </div>
      <div className="favourites">
        <h1>Recents</h1>
        <p>Enamen pharmacy - 10/3/2024 </p>
      {/* follow the format on the comments to do the correct thing */}
        {/* {
          recents.map((index,recent) =>(
        <p>{recent.pharmacy} pharmacy - {recent.date} </p>
        ))
        } */}
      </div>
      </div>
    </div>
    </div>
  );
}

export default Myaccount;
