// actions.js

export const saveSearchResult = (result) => ({
    type: 'SAVE_SEARCH_RESULT',
    payload: result,
    savePrevious: true,
});

export const resetSearchResult = () => ({
    type: 'RESET_SEARCH_RESULT',
});

export const saveSearchData = (data) => ({
    type: 'SAVE_SEARCH_DATA',
    payload: data,
});

export const setSelectedShape = (shape) => ({
    type: 'SET_SELECTED_SHAPE',
    payload: shape,
});

export const clearSelectedShape = () => ({
    type: 'CLEAR_SELECTED_SHAPE',
});

export const setSelectedProvenience = (shape) => ({
    type: 'SET_SELECTED_SHAPE',
    payload: shape,
});

export const clearSelectedProvenience = () => ({
    type: 'CLEAR_SELECTED_SHAPE',
});

export const setSelectedInventory = (shape) => ({
    type: 'SET_SELECTED_SHAPE',
    payload: shape,
});

export const clearSelectedInventory = () => ({
    type: 'CLEAR_SELECTED_SHAPE',
});