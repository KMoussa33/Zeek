"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../styles/globals.css";

const SearchField = () => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const searchToggle = () => {
    setShowSearch(!showSearch); // Toggle the showSearch state
  };

  return (
    <div className="search-wrapper">
      {showSearch && (
        <div className="input-holder">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            placeholder="Type to search"
          />
        </div>
      )}
      <button onClick={searchToggle}>
        <FontAwesomeIcon icon={faSearch} /> {/* Use the 'search' icon */}
      </button>
      <span className="close" onClick={searchToggle}></span>
    </div>
  );
};

export default SearchField;
