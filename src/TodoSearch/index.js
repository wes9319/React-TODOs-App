import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='TodoSearch-container' >
      <input 
        className='TodoSearch' 
        placeholder="Seach TODOs"
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </div>
  )
}

export { TodoSearch };