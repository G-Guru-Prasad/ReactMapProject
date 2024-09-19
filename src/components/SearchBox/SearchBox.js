import React, { useState } from "react";

import "./SearchBox.css";

export default function SearchBox({onSearchChange}) {
  const [filtered, setFilteredData] = useState([])
  const [inputValue, setInputValue] = useState([])

  function handleSeachChange(event){
    const input = event.target.value;
    event.target.value = input
    onSearchChange(input);
  }

  return (
    <div>

    <input
      id="search-box"
      className="SearchBox"
      placeholder="Search for location"
      onChange={(event) => handleSeachChange(event)}
      />
    </div>

  );
}
