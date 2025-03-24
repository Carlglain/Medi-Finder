import React, { useEffect, useState } from "react";
import "./myaccount.css";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";

function Myaccount() {
  const [userInfo,setUserInfo] =useState([])
  useEffect(() => {
    //get athenticated user profile
const fetchUserProfile = async (req, res) => {
  if(authorizedUser){
     try{
  const res = await axios.get("https://rrn24.techchantier.site/Medi-finder/public/api/auth/profile",{ headers:{
      "Content-Type": "application/json",
      "Accept": "application/json",
  }})
  console.log(res.data) //user profile data here
  setUserInfo(res.data) // update state with user profile data
}
catch (err) {
console.error(err);
}}
}
fetchUserProfile()
  
  },[])
  
  const handleLogOut = async()=>{
    const res = await axios.post("https://rrn24.techchantier.site/Medi-finder/public/api/auth/logout",{ headers:{
      "Content-Type": "application/json",
      "Accept": "application/json",
  }})
  }

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
          <span className="user-name"> {userInfo.name}</span>
        </div>
        <hr />
        <div className="account-content">
          <div className="more-info">
        <h2 className="blur-header">More info</h2>
        <p>
          <span>Email</span> <span>{userInfo.email}</span>{" "}
        </p>
        <p>
          <span>Phone</span> <span> {userInfo.whatsapp_number}</span>{" "}
        </p>
        <p>
          <span>User Type</span> <span> {userInfo.user_type}</span>{" "}
        </p>
        <button>Edit Profile</button>
          <button onClick={handleLogOut}>Logout</button>
          </div>
        {/* if user is not logged in */}
        <div>
          <Link className="a" to="/login">Login Options</Link>
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
