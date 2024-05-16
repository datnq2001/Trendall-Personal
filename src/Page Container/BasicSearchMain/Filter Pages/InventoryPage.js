import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import items from "../../../Components/BasicResearch/Alphabet Page/InventoryGroups"; // Import the items array from the InventoryGroups.js file
import Header from "../../../Components/HomeScreen/Header";
import "./ShapePage.css";
import Footer from "../../../Components/HomeScreen/Footer";

// Import the vases data
import vases from "../../../Data/Vase";


// Component for items in the list
function SearchItem({ name, url }) {
  const searchDataFromRedux = useSelector(state => state.search.searchData);
  const countVasesByName = (name) => {
    return searchDataFromRedux.filter(vase => vase["Inventory ID"] === name).length;
  };

  // Display SearchItem only if countVasesByName(name) > 0
  if (countVasesByName(name) > 0) {
    return (
      <Link className="searchListValue" to={url}>
        {name}
        <span className="countVasesByName">({countVasesByName(name)})</span>
      </Link>
    );
  } else {
    // If countVasesByName(name) === 0 then display nothing
    return null;
  }
}

// Component for the list of items by alphabet
function AlphabetList({ letters }) {
  const handleClick = (event, targetId) => {
    event.preventDefault(); // Prevent the default behavior of the link
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetOffset = targetElement.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: scrollTop + targetOffset - 70, // Scroll up 70px
        behavior: "smooth" // Smooth scroll
      });
    }
  };

  return (
    <div className="alphabetHeader">
      {letters.map((letter, index) => (
        <a key={index} className="alphabetLink" href={`#${letter}`} onClick={(e) => handleClick(e, letter)}>
          {letter}
        </a>
      ))}
    </div>
  );
}

// Component for the list of items by alphabet
function SearchList({ items }) {
  return (
    <div className="searchListContainer">
      {items.map((item, index) => (
        <p key={index}>
          <a id={item.letter} className="letter-list">
            {item.values.map((value, i) => (
              <SearchItem key={i} name={value.name} url={value.url} />
            ))}
          </a>
        </p>
      ))}
    </div>
  );
}

function InventoryPage() {
  const searchDataFromRedux = useSelector(state => state.search.searchData) || vases; // Use data from vases if searchDataFromRedux has no data
  
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <div className="app">
    <Header/>
      <div className="app__container">
        <div className="background--black-full"> </div>
          <div className="grid-container">
            <div className="white-text">
            <div className="container__link navigation-section__link" onClick={handleBack}>
              <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
              Return previous page
            </div>
            <h1>Classical Art Research Centre Pottery Search</h1>
            <h2>Search by Inventory</h2>
            <p>
              To search the database click on the inventory below,{" "}
              <Link className="nounderlinehover" to="http://www.beazley.ox.ac.uk/pottery/inventory/default.htm">
                or click for introductory help on inventorys
              </Link>.
            </p>
            <div className="AlphabetList-container">
            <AlphabetList letters={letters} /> </div>
            <SearchList items={items} /> {/* Use the items array */}
          </div> 
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default InventoryPage;
