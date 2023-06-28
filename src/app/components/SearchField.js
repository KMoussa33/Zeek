"use client";

import { useState } from "react";
import "../../styles/globals";

const searchField = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-wrapper">
      <div className="input-holder">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          placeholder="Type to search"
        />
        <button className="search-icon" onClick="searchToggle(this, event);">
          <span></span>
        </button>
      </div>
      <span className="close" onClick="searchToggle(this, event"></span>
    </div>
  );
};

export default searchField;
