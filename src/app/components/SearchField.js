"use client";

import { useState } from "react";
import "../../styles/globals.css";

const SearchField = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const searchToggle = (e) => {
    if (e.target.className !== "input-holder") {
      setIsActive(!isActive);
    }
    if (isActive && e.target.className !== "input-holder") {
      setInputValue("");
    }
  };

  return (
    <div className={`search-wrapper ${isActive ? "active" : ""}`}>
      <div className="input-holder">
        <input
          type="text"
          className="search-input"
          placeholder="Type to search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search-icon" onClick={searchToggle}>
          <span></span>
        </button>
      </div>
      <span className="close" onClick={searchToggle}></span>
    </div>
  );
};

export default SearchField;
