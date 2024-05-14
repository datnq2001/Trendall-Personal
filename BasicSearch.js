import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./BasicSearch.css";

function BasicSearch() {
  const vaseIDRef = useRef(null);
  const collectionRef = useRef(null);

  const handleViewResultsClick = () => {
    vaseIDRef.current.value = ""; // Clear the value of the Vase ID input field
    collectionRef.current.value = ""; // Clear the value of the Collection input field
  };

  return (
    <div className="basic-search-container">
      <div className="background">
        <div className="basic_search-grid-container">
          <div className="container-section basic-search-section" id="search">
            <Link
              to="/search"
              className="container__link navigation-section__link"
            >
              <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
              Return
            </Link>
            <div className="container__header search-section__header"></div>
            <div className="search-options">
              {/* Basic Search */}
              <div className="basic-search-option">
                <h2 className="basic-search-option__heading">BASIC SEARCH</h2>
                {/* Add basic search form or button here */}
                <div className="basic-search-block">
                  <label htmlFor="vaseID">Vase ID:</label>
                  <input
                    type="text"
                    id="vaseID"
                    name="vaseID"
                    ref={vaseIDRef}
                  />
                </div>
                <div className="basic-search-block">
                  <label htmlFor="collection">Collection:</label>
                  <input
                    type="text"
                    id="collection"
                    name="collection"
                    ref={collectionRef}
                  />
                </div>
                {/* Add "View Results" button */}
                <button
                  className="view-results-button"
                  onClick={handleViewResultsClick}
                >
                  View Results
                </button>
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

export default BasicSearch;
