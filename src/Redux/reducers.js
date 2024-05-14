const initialState = {
    searchResult: null,
    previousSearchResult: null, // Thêm trạng thái để lưu trữ kết quả tìm kiếm trước đó
    searchData: [],
    selectedShape: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_SEARCH_RESULT':
            if (action.savePrevious) {
                return { ...state, previousSearchResult: state.searchResult, searchResult: action.payload };
            } else {
                return { ...state, searchResult: action.payload };
            }
        case 'RESET_SEARCH_RESULT':
            return { ...state, searchResult: null };
        case 'SAVE_SEARCH_DATA':
            return {
                ...state,
                searchData: action.payload,
            };
        case 'SET_SELECTED_SHAPE':
            return {
                ...state,
                selectedShape: action.payload
            };
        case 'CLEAR_SELECTED_SHAPE':
            return {
                ...state,
                selectedShape: null // hoặc giá trị khác thích hợp
            };
        case 'SET_SELECTED_PROVENIENCE':
            return {
                ...state,
                selectedProvenience: action.payload
            };
        case 'CLEAR_SELECTED_Provenience':
            return {
                ...state,
                selectedProvenience: null // hoặc giá trị khác thích hợp
            };
        case 'SET_SELECTED_INVENTORY':
            return {
                ...state,
                selectedInventory: action.payload
            };
        case 'CLEAR_SELECTED_INVENTORY':
            return {
                ...state,
                selectedInventory: null // hoặc giá trị khác thích hợp
            };
            
        default:
            return state;
    }
};

export default searchReducer;
