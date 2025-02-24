import React from 'react'
import './search.css'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
function Search() {
  const handleSearch = () => {
    // Logic to handle search
    console.log('Search triggered')
  }
  return (
    <div className='search-bar'>
      <input name='Search' placeholder="Search for pharmacies, medications, or healthcare services..." /> <button onClick={handleSearch}><SavedSearchIcon className='search-icon'/></button>
    </div>
  )
}

export default Search
