//VaseSearchResult.js
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { saveSearchData } from '../../Redux/actions';
import BasicSearchButton from "../../Components/BasicResearch/Buttons In Page/BasicSearchButton";
import Header from "../../Components/HomeScreen/Header";
import BasicSearchButtonNoLink from "../../Components/BasicResearch/Buttons In Page/BasicSearchButtonNoLink";

// Import vases data
import vases from "../../Data/Vase";

function VaseSearchResult() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const txtValue = queryParams.get("txtValue");

    const [searchData, setSearchData] = useState(vases); // Sử dụng state để lưu trữ dữ liệu tạm thời

    const searchDataFromRedux = useSelector(state => state.search.searchData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (searchDataFromRedux && searchDataFromRedux.length > 0) {
            setSearchData(searchDataFromRedux);
        } else {
            setSearchData(vases);
            dispatch(saveSearchData(vases)); 
        }
    }, [searchDataFromRedux, dispatch]);

    useEffect(() => {
        // Lọc dữ liệu khi có giá trị txtValue thay đổi
        if (txtValue) {
            const filteredVases = searchDataFromRedux.filter((item) => item["Inventory ID"] === txtValue || item["Artifact Type"] === txtValue || item["Provenience"] === txtValue);
            setSearchData(filteredVases);
            dispatch(saveSearchData(filteredVases));
        }
    }, [txtValue, dispatch]);

    const handleRestartSearch = () => {
        dispatch(saveSearchData(vases)); 
        window.location.href = '/basic-search';// Reset dữ liệu tạm thời thành dữ liệu từ vase.js
    };
    const totalVases = vases.length;
    return (
        <div className="app">
            <Header/>
            <div className="app__container">
            <div className="background--black-full"></div>
                <div className="grid-container">
                    <div className="white-text">
                        <div className="basic-search-result-container">
                        <h1 className="search-result-heading">Search Result for "{txtValue}"</h1>
                        <p className="output-vases-found">{searchData.length === totalVases ? 0 : searchData.length} vases found</p>
                        {/* Hiển thị danh sách các vase tìm thấy (nếu cần) */}
                        {searchData.length > 0 && searchData.length < vases.length && (
                            <ul>
                                <div className="product-grid">
                                {searchData.map((vase, index) => (
                                    <li key={index} className="card-object stacked">
                                        <Link to={`/vase-detail/${vase["Reference No."]}`} className="artifact-link">
                                        <img className="artifact-main-image" src={vase.image} alt={`Vase ${index}`} />
                                        <div className="card-object__content">
                                            {vase["Reference No."]}, {vase["Artifact Type"]}, {vase["Inventory ID"]}, {vase["Provenience"]}
                                        </div>
                                        </Link>
                                    </li>
                                ))}
                                </div>
                            </ul>
                        )}
                        </div>
                    </div>
                    {/* Các nút tìm kiếm cơ bản */}
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
    );
}

export default VaseSearchResult;
