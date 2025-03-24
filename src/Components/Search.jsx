import React, { useState } from "react";
import "./search.css";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import axios from "axios";
function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const val = event.target.value;
    setSearchText(val);
  };
  const handleSearch = async () => {
    // Logic to get search api from backend
    try {
      const response = await axios.get("https://rrn24.techchantier.site/Medi-finder/public/api/medical-facilities/search"); //enter search url
      setSearchResults(response.data); // Assuming response.data is an array of search results
    } catch (error) {
      console.log("Error:" + error);
      setError(error)
    }
    setSearchText("");
  };
  return (
    <div className="search-container">
      
    <div className="search-bar">
      <input
        onChange={handleChange}
        name="Search"
        placeholder="Search for pharmacies, medications, or healthcare services..."
      />{" "}
      <button onClick={handleSearch}>
        <SavedSearchIcon className="search-icon" />
      </button>
      
    </div>
    
    <div className="search-results" >
      {searchResults.length > 0 && (
        <div >
          {searchResults.map((result, index) => (
            <div key={index} className="search-result">
              <h3>{result.name}</h3>
             
            </div>
          ))}
        </div>
      )}
      {error && <div>Error: {error.message}</div>}
      </div>
    </div>
  );
}

export default Search;
