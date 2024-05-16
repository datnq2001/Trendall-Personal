import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/HomeScreen/Header";
import AdvancedButton from "../../Components/AdvancedSearch/AdvancedButton";
import InventorySearchBar from "../../Components/AdvancedSearch/InventorySearchBar";
import ShapeSearchBar from "../../Components/AdvancedSearch/ShapeSearchBar";
import ProvenienceSearchBar from "../../Components/AdvancedSearch/ProvenienceSearchBar";
import VaseIdSearchBar from "../../Components/AdvancedSearch/VaseIdSearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchData } from '../../Redux/actions';
import ReactPaginate from 'react-paginate';
import ButtonStyle from "../../Element/ButtonStyle";
import Footer from "../../Components/HomeScreen/Footer";


// Import data
import { shapes } from "../../Data/Shapes";
import { provenience } from "../../Data/Provenience";
import { inventory } from "../../Data/Inventory";
import vases from "../../Data/Vase";




// Define number of items per page
const itemsPerPage = 12;

// Advanced search component
function AdvancedSearch() {
  // State variables
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(true);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedProvenience, setSelectedProvenience] = useState("");
  const [selectedInventory, setSelectedInventory] = useState("");
  const [searchData, setSearchData] = useState(vases);
  const searchDataFromRedux = useSelector(state => state.search.searchData);
  const dispatch = useDispatch();
  const [filterString, setFilterString] = useState("Showing search results for: ");
  const [searchInput, setSearchInput] = useState(""); // Define searchInput state

  // Effect hook to handle search data from Redux
  useEffect(() => {
    if (searchDataFromRedux && searchDataFromRedux.length > 0) {
      setSearchData(searchDataFromRedux);
    } else {
      setSearchData(vases);
      dispatch(saveSearchData(vases)); 
    }
  }, [searchDataFromRedux, dispatch]);

  // Effect hook to filter search results based on selected filters
  useEffect(() => {
    if (selectedShape || selectedProvenience || selectedInventory) {
      const filteredVases = vases.filter(vase => {
        return (
          (!selectedShape || vase["Artifact Type"] === selectedShape) &&
          (!selectedProvenience || vase["Provenience"] === selectedProvenience) &&
          (!selectedInventory || vase["Inventory ID"] === selectedInventory)
        );
      });
      setSearchData(filteredVases);
      dispatch(saveSearchData(filteredVases));
    }
  }, [selectedShape, selectedProvenience, selectedInventory, dispatch]);

  // State variable for current page
  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle page click event
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  
  // Slice items for pagination
  const slicedItems = searchData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Function to restart search
  const handleRestartSearch = () => {
    dispatch(saveSearchData(vases)); 
    setFilterString("Showing search results for: ");
    window.location.href = '/advanced-search';
  };

  // Function to construct filter state string
  const filterState = () => {
    let tempFilterString = "Showing search results for: ";

    if (selectedShape) {
      tempFilterString += `Shape='${selectedShape}'`;
    }

    if (selectedInventory) {
      if (selectedShape) {
        tempFilterString += " + ";
      }
      tempFilterString += `Inventory='${selectedInventory}'`;
    }

    if (selectedProvenience) {
      if (selectedShape || selectedInventory) {
        tempFilterString += " + ";
      }
      tempFilterString += `Provenance='${selectedProvenience}'`;
    }
    if (searchInput) {
      if (selectedShape || selectedInventory || selectedProvenience) {
        tempFilterString += " + ";
      }
      tempFilterString += `Vase ID='${searchInput}'`;
    }

    return tempFilterString;
  };

  // Function to handle search
  const handleSearch = () => {
    const filteredVases = vases.filter(vase => vase["Reference No."] === searchInput);
    setSearchData(filteredVases);
    setFilterString(filterState());
  };

  // Effect hook to update filter state string
  useEffect(() => {
    setFilterString(filterState());
  }, [selectedShape, selectedProvenience, selectedInventory]);


  // State variable for sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleButtonClose = () => {
    setSidebarVisible(false);
  };
  
  const toolPageContainerClass = isSidebarVisible ? 'tool-page-container tool-page-container--advanced visible' : 'tool-page-container tool-page-container--advanced';

  // Render the component
  return (
    <div className="app">
      <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
      <Header />
      <div className="app__container">
        <div className="background--black">
          <div className="grid-container grid-container--advanced">
            <div className={toolPageContainerClass}>
              <div className={`page-side-one ${isSidebarVisible ? 'visible' : ''}`}>
              <i className="close-side-bar fa-solid fa-xmark" onClick={handleButtonClose}></i>
                <h4 className="advanced-search-title">Advanced Search</h4>
                <div className="search-by-type">
                  <VaseIdSearchBar
                    handleSearch={handleSearch}
                    type="Vase ID"
                    setSearchData={setSearchData}
                    searchInput={searchInput} // Pass searchInput state
                    setSearchInput={setSearchInput} // Pass setSearchInput state
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <AdvancedButton buttonText="Shape" />
                  <ShapeSearchBar
                    searchData={shapes}
                    type="Shape"
                    onSelect={shape => setSelectedShape(shape)}
                    vaseData={searchData}
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <AdvancedButton buttonText="Inventory" />
                  <InventorySearchBar
                    searchData={inventory}
                    type="Inventory"
                    onSelect={inventory => setSelectedInventory(inventory)}
                    vaseData={searchData}
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <AdvancedButton buttonText="Provenience" />
                  <ProvenienceSearchBar
                    searchData={provenience}
                    type="Provenience"
                    onSelect={provenience => setSelectedProvenience(provenience)}
                    vaseData={searchData}
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
              </div>
              <div className="page-side-five">
                <ButtonStyle buttonName="Filter" onClick={handleButtonClick}/>
                <div className="filter-state">
                  {filterString}
                </div>
                <div className="viewing-option">
                  <label className="advanced-label-checkbox">
                    <input
                      className="advanced-checkbox"
                      type="checkbox"
                      checked={showImage}
                      onChange={() => setShowImage(!showImage)}
                    />
                    Show Images
                  </label>
                  <label className="advanced-label-checkbox">
                    <input
                      className="advanced-checkbox"
                      type="checkbox"
                      checked={showText}
                      onChange={() => setShowText(!showText)}
                    />
                    Show Text
                  </label>
                  <button className="clear-all-filter" onClick={handleRestartSearch}>
                    Clear All Filters
                  </button>
                </div>
                <ul>
                  <div className="product-grid">
                    {slicedItems.map((vase, index) => (
                      <li key={index} className="card-object stacked">
                        <Link to={`/vase-detail/${vase["Reference No."]}`} className="artifact-link">
                          {showImage && <img className="artifact-main-image" src={vase.image} alt={`Vase ${index}`} />}
                          {showText && (
                            <div className="card-object__content">
                              {vase["Reference No."]}, {vase["Artifact Type"]}, {vase["Inventory ID"]}, {vase["Provenience"]}
                            </div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
                <ReactPaginate
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={2}
                  pageCount={Math.ceil(searchData.length / itemsPerPage)}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Export the component
export default AdvancedSearch;
