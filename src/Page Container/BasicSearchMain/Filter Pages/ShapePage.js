import React from "react";
import { useSelector } from 'react-redux';
import { Link , useNavigate} from "react-router-dom";
import items from "../../../Components/BasicResearch/Alphabet Page/ShapeGroups"; 
import Header from "../../../Components/HomeScreen/Header";
import "./ShapePage.css";

// Import the vases data
import vases from "../../../Data/Vase";



function SearchItem({ name, url, searchDataFromRedux }) {
  // Function to count vases by name
  const countVasesByName = (name) => {
    return searchDataFromRedux.filter(vase => vase["Artifact Type"] === name).length;
  };

  // Display SearchItem only if searchDataFromRedux is available and countVasesByName(name) > 0
  if (searchDataFromRedux && countVasesByName(name) > 0) {
    return (
      <Link className="searchListValue" to={url}>
        {name}
        <span className="countVasesByName">({countVasesByName(name)})</span>
      </Link>
    );
  } else {
    return null;
  }
}

function AlphabetList({ letters }) {
  // Function to handle click on alphabet links
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

  // Render alphabet links
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

function SearchList({ items, searchDataFromRedux }) {
  // Render search list items
  return (
    <div className="searchListContainer">
      {items.map((item, index) => (
        <p key={index}>
          <a id={item.letter} className="letter-list">
            {item.values.map((value, i) => (
              <SearchItem key={i} name={value.name} url={value.url} searchDataFromRedux={searchDataFromRedux} />
            ))}
          </a>
        </p>
      ))}
    </div>
  );
}

function ShapePage() {
  const searchDataFromRedux = useSelector(state => state.search.searchData) || vases; // Use data from vases if searchDataFromRedux has no data
  
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  const navigate = useNavigate();

  // Function to handle navigation back
  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className="app">
      <Header/>
      <div className="app__container">
        <div className="background--black-full"></div>
        <div className="grid-container">
          <div className="white-text">
            <div className="container__link navigation-section__link" onClick={handleBack}>
              <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
              Return previous page
            </div>
            <h1>Classical Art Research Centre Pottery Search</h1>
            <h2>Search by Shape</h2>
            <p>
              To search the database click on the shape below,{" "}
              <Link className="nounderlinehover" to="http://www.beazley.ox.ac.uk/pottery/shapes/default.htm">
                or click for introductory help on shapes
              </Link>.
            </p>
            <div className="AlphabetList-container">
              <AlphabetList letters={letters} />
            </div>
            <SearchList items={items} searchDataFromRedux={searchDataFromRedux} />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default ShapePage;
