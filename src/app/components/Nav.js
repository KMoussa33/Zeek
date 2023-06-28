import React, { useState } from "react";
import Link from "next/Link";
import "../../styles/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  // toggle faBars for small to medium screens
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto px-4 flex justify-between items-center text-base">
        <Link href="/">
          <h1 className="text-3xl font-light text-stone-700 cursor-pointer">
            ZeeK
          </h1>
        </Link>
        {/* hides fabars larger than medium screens */}
        <button className="md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icone={faBars} className="text-stone-700" />
        </button>
        <div className={`md:flex items center ${isOpen ? "" : "hidden"}`}>
          {/* Dynamic Search bar */}
          <div className="search-wrapper">
            <div className="input-holder">
              <input
                type="text"
                className="search-input"
                placeholder="Type to search"
              />
              <button
                className="search-icon"
                onClick="searchToggle(this, event);"
              >
                <span></span>
              </button>
            </div>
            <span className="close" onClick="searchToggle(this, event"></span>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
