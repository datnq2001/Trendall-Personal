import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ProvenienceSearchBar({ searchData, type, vaseData, onSelect, onSearchAndClose }) {
    const [searchInput, setSearchInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(true); // Ban đầu hiển thị phần gợi ý
    const [matchedItems, setMatchedItems] = useState([]);
    const searchWrapperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [searchWrapperRef]);

    useEffect(() => {
        // Hiển thị phần gợi ý khi có sự thay đổi trong searchData hoặc vaseData
        showAllData();
    }, [searchData, vaseData]);

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setSearchInput(inputVal);

        if (inputVal.trim() === "") {
            setMatchedItems([]);
            setShowSuggestions(true); // Hiển thị phần gợi ý khi input rỗng
            return;
        }

        const matches = searchData
            .filter(item => typeof item === 'string' && item.toLowerCase().startsWith(inputVal.toLowerCase()))
            .map(option => {
                const count = vaseData.filter(vase => vase["Provenience"] === option ).length;
                return { name: option, count };
            });

        setMatchedItems(matches);
        setShowSuggestions(true);
    };

    const handleSelectName = (name) => {
        setSearchInput(name);
        setMatchedItems([]);
        setShowSuggestions(false);
        onSelect(name); // Gọi hàm onSelect và truyền giá trị gợi ý vào
    };

    const handleSearch = () => {
        // navigate(`/search?q=${encodeURIComponent(searchInput)}`);
    };
    
    const showAllData = () => {
        const matches = searchData.map(option => {
            const count = vaseData.filter(vase => vase["Provenience"] === option ).length;
            return { name: option, count };
        });
    
        // Sắp xếp các mục theo thứ tự alphabet
        const filteredMatches = matches.filter(item => item.count > 0);

        // Sắp xếp các mục theo thứ tự alphabet
        filteredMatches.sort((a, b) => a.name.localeCompare(b.name));

        setMatchedItems(filteredMatches);
    };

    return (
        <div className="search-bar-wrapper search-bar-wrapper--advanced" ref={searchWrapperRef}>
            <div className="header__search header__search--advanced">
                <div className="header__search-input-wrap header__search-input-wrap--advanced">
                    <input
                        type="text"
                        className="header__search-input header__search-input--advanced"
                        placeholder={`Search ${type} ...`}
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    
                </div>
                <button className="header__search-btn header__search-btn--advanced" onClick={() => { handleSearch(); onSearchAndClose(); }}>
                    <i className="header__search-btn-icon fas fa-search"></i>
                </button>
            </div>
            <div className="header__search-history header__search-history--advanced">
                <h3 className="header__search-history-heading">Search suggestion</h3>
                <ul className="header__search-history-list list">
                    {matchedItems.map(({ name, count }) => (
                        <li
                            key={name}
                            className="header__search-history-item  header__search-history-item--advanced list-items"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleSelectName(name)}
                        >
                            <span>
                                <b>{name}</b> ({count} vases)
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProvenienceSearchBar;
