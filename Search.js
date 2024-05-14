import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

function Search() {
  return (
    <div className="search-container">
      {" "}
      {/* Change 'app' to 'search-container' */}
      <div className="background--black">
        <div className="search-grid-container">
          {" "}
          {/* Change 'grid-container' to 'search-grid-container' */}
          <div className="container-section search-section" id="search">
            <Link to="/" className="container__link navigation-section__link">
              <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
              Return home page
            </Link>
            <div className="container__header search-section__header"></div>
            <div className="search-options">
              {/* Basic Search */}
              <div className="basic-search-option">
                {/* Wrap the heading in a Link component */}
                <Link to="/basicsearch" className="basic-search-link">
                  <h2 className="basic-search-option__heading">BASIC SEARCH</h2>
                </Link>
                {/* Update the link to point to BasicSearch */}
              </div>
              {/* Traditional Search */}
              <div className="traditional-search-option">
                <h2 className="traditional-search-option__heading">
                  TRADITIONAL SEARCH
                </h2>
                {/* Add traditional search form or button here */}
              </div>
              {/* Advanced Search */}
              <div className="advanced-search-option">
                <h2 className="advanced-search-option__heading">
                  ADVANCED SEARCH
                </h2>
                {/* Add advanced search form or button here */}
              </div>
            </div>
          </div>
        </div>
        <p className="search__copyright">
          &copy; Created by La Trobe University
        </p>
      </div>
    </div>
  );
}

export default Search;
