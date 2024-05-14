import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/HomeScreen/Header";
import SearchBar from "../../Components/TraditionalSearch/SearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchData, clearSelectedShape, clearSelectedInventory, clearSelectedProvenience } from '../../Redux/actions';
import ReactPaginate from 'react-paginate';
import ButtonStyle from "../../Element/ButtonStyle";

// Import vases data
import vases from "../../Data/Vase";

const itemsPerPage = 12;

// Component for traditional search functionality
function TraditionalSearch() {
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(true);
  const [searchData, setSearchData] = useState(vases);
  const searchDataFromRedux = useSelector(state => state.search.searchData);
  const dispatch = useDispatch();
  const [filterString, setFilterString] = useState("Showing search results for: ");
  
  // Define searchInput for each type of search
  const [searchInputVaseId, setSearchInputVaseId] = useState(""); 
  const [searchInputShape, setSearchInputShape] = useState(""); 
  const [searchInputInventory, setSearchInputInventory] = useState(""); 
  const [searchInputProvenience, setSearchInputProvenience] = useState(""); 
  const selectedShape = useSelector(state => state.search.selectedShape); 
  const selectedInventory = useSelector(state => state.search.selectedInventory); 
  const selectedProvenience = useSelector(state => state.search.selectedProvenience); 

  useEffect(() => {
    if (selectedShape) {
      setSearchInputShape(selectedShape);
    }
  }, [selectedShape]);
  useEffect(() => {
    if (selectedInventory) {
      setSearchInputInventory(selectedInventory);
    }
  }, [selectedInventory]);
  useEffect(() => {
    if (selectedProvenience) {
      setSearchInputProvenience(selectedProvenience);
    }
  }, [selectedProvenience]);

  useEffect(() => {
    if (searchDataFromRedux && searchDataFromRedux.length > 0) {
      setSearchData(searchDataFromRedux);
    } else {
      setSearchData(vases);
      dispatch(saveSearchData(vases)); 
    }
  }, [searchDataFromRedux, dispatch]);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const slicedItems = searchData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Function to clear all filters and reset search
  const handleRestartSearch = () => {
    dispatch(saveSearchData(vases)); 
    dispatch(clearSelectedShape());
    dispatch(clearSelectedInventory());
    dispatch(clearSelectedProvenience());
    setFilterString("Showing search results for: ");
    window.location.href = '/traditional-search';
  };

  // Function to generate filter string based on search inputs
  const filterState = () => {
    let tempFilterString = "Showing search results for: ";

    if (searchInputShape) {
      tempFilterString += `Shape='${searchInputShape}'`;
    }

    if (searchInputInventory) {
      if (searchInputShape) {
        tempFilterString += " + ";
      }
      tempFilterString += `Inventory='${searchInputInventory}'`;
    }

    if (searchInputProvenience) {
      if (searchInputShape || searchInputInventory) {
        tempFilterString += " + ";
      }
      tempFilterString += `Provenance='${searchInputProvenience}'`;
    }
    if (searchInputVaseId) {
      if (searchInputShape || searchInputInventory || searchInputProvenience) {
        tempFilterString += " + ";
      }
      tempFilterString += `Vase ID='${searchInputVaseId}'`;
    }

    return tempFilterString;
  };

  // Function to handle specific Vase ID search
  const handleSearch = () => {
    const filteredVases = vases.filter(vase => vase["Reference No."] === searchInputVaseId);
    setSearchData(filteredVases);
    setFilterString(filterState());
  };

  // Function to handle general type search
  const handleTypeSearch = () => {
    if (searchInputShape || searchInputProvenience || searchInputInventory) {
      const filteredVases = vases.filter(vase => {
        const vaseType = vase["Artifact Type"].toLowerCase().replace(/[\W_]+/g,"");
        const vaseProvenience = vase["Provenience"].toLowerCase().replace(/[\W_]+/g,"");
        const vaseInventory = vase["Inventory ID"].toLowerCase().replace(/[\W_]+/g,"");

        const searchShape = searchInputShape ? searchInputShape.toLowerCase().replace(/[\W_]+/g,"") : null;
        const searchProvenience = searchInputProvenience ? searchInputProvenience.toLowerCase().replace(/[\W_]+/g,"") : null;
        const searchInventory = searchInputInventory ? searchInputInventory.toLowerCase().replace(/[\W_]+/g,"") : null;

        return (
          (!searchShape || vaseType.includes(searchShape)) &&
          (!searchProvenience || vaseProvenience.includes(searchProvenience)) &&
          (!searchInventory || vaseInventory.includes(searchInventory))
        );
      });
      setSearchData(filteredVases);
      setFilterString(filterState());
    }
  };

  // Effect hook to update filter string
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

  // Render the component
  return (
    <div className="app">
      <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
      <Header />
      <div className="app__container">
        <div className="background--black">
          <div className="grid-container grid-container--advanced">
            <div className="tool-page-container tool-page-container--advanced">
            <div className={`page-side-one ${isSidebarVisible ? 'visible' : ''}`}>
              <i className="close-side-bar fa-solid fa-xmark" onClick={handleButtonClose}></i>
                <h4 className="advanced-search-title">Traditional Search</h4>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleSearch}
                    type="Vase ID 1-123"
                    setSearchData={setSearchData}
                    searchInput={searchInputVaseId} // Use searchInputVaseId
                    setSearchInput={setSearchInputVaseId} // Use setSearchInputVaseId
                    onSearchAndClose={handleButtonClose}
                  />
                </div>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleTypeSearch}
                    type="Shape"
                    setSearchData={setSearchData}
                    searchInput={searchInputShape} // Use searchInputShape
                    setSearchInput={setSearchInputShape} // Use setSearchInputShape
                    onSearchAndClose={handleButtonClose}
                  />
                  <a href="/shape-terms" className="term-link">Shape Terms</a>
                </div>
                
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleTypeSearch}
                    type="Inventory"
                    setSearchData={setSearchData}
                    searchInput={searchInputInventory} // Use searchInputInventory
                    setSearchInput={setSearchInputInventory} // Use setSearchInputInventory
                    onSearchAndClose={handleButtonClose}
                  />
                  <a href="/inventory-terms" className="term-link">Inventory Terms</a>
                </div>
                <div className="search-by-type">
                  <SearchBar
                    handleSearch={handleTypeSearch}
                    type="Provenience"
                    setSearchData={setSearchData}
                    searchInput={searchInputProvenience} // Use searchInputProvenience
                    setSearchInput={setSearchInputProvenience} // Use setSearchInputProvenience
                    onSearchAndClose={handleButtonClose}
                  />
                  <a href="/provenience-terms" className="term-link">Provenience Terms</a>
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
    </div>
  );
}

export default TraditionalSearch;
