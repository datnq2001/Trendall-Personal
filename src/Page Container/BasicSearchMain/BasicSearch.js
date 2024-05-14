import React from "react";
import Header from "../../Components/HomeScreen/Header";
import SwiperComponent from "../../Components/BasicResearch/Swiper";
import BasicSearchButton from "../../Components/BasicResearch/Buttons In Page/BasicSearchButton";
import BasicSearchButtonNoLink from "../../Components/BasicResearch/Buttons In Page/BasicSearchButtonNoLink";
import { useDispatch } from 'react-redux';
import { saveSearchData } from '../../Redux/actions';

// Import vases data
import vases from "../../Data/Vase";

// Component for basic search functionality
function BasicSearch() {
  const dispatch = useDispatch();
  const images = [
    'assets/images/swiper-1.png',
    'assets/images/swiper-6.png',
    'assets/images/swiper-3.png',
    'assets/images/swiper-2.png',
    'assets/images/swiper-5.png',
    "assets/images/swiper-4.png"
  ];

  // Function to reset search data
  const handleRestartSearch = () => {
    dispatch(saveSearchData(vases)); 
    window.location.href = '/basic-search'; // Reset temporary data to data from vase.js
  };

  // Render the component
  return (
    <div className="app">
      <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
      <Header />
      <div className="app__container">
        <div className="background--black">
          <div className="grid-container">
            <div className="tool-page-container">
              <div className="page-left-side">
                <h1 className='tool-header'>BASIC SEARCH TOOL</h1>
                <h3 className='tool-introduction'>Delve deeper into the collection of the Trendall Research Centre for Ancient Mediterranean Studies and immerse yourself in two million years of history across six continents.</h3> <br/>
                <h3 className='tool-introduction'>Online access to the collection allows you to explore nearly 4.5 million objects across more than 2 million records. High-resolution images can be enlarged and examined in detail, allowing you to appreciate the intricacies of ancient artifacts. This is just a glimpse of the thousands of fascinating discoveries awaiting you.</h3>
                <SwiperComponent slides={images}></SwiperComponent>
              </div>
              <div className="page-right-side">
                <h4 className="tool-title">Start your research with:</h4>
                <BasicSearchButton
                  onClick={() => window.location = 'testSearch.asp?searchBy=Shape'}
                  buttonText="Shape"
                  buttonUrl="/search-by-shape"
                />
                <BasicSearchButton
                  onClick={() => window.location = 'testSearch.asp?searchBy=Inventory'}
                  buttonText="Inventory"
                  buttonUrl="/search-by-inventory"
                />
                <BasicSearchButton
                  onClick={() => window.location = 'testSearch.asp?searchBy=Provenience'}
                  buttonText="Provenience"
                  buttonUrl="/search-by-provenience"
                />
                <BasicSearchButtonNoLink
                  onClick={handleRestartSearch}
                  buttonText="Start a new research"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicSearch;
