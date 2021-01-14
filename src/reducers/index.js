const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return {
                ...state,
                movie: action.payload
            };
        case 'POPULARS_RECEIVED':
            return {
                ...state,
                populars: action.payload
            };
        case 'GENRES_RECEIVED':
            return {
                ...state,
                genres: action.payload
            };
        case 'UPDATE_SEARCH':
            return {
                ...state,
                searchTerm: action.payload
            }
        case 'SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.payload
            }
        default:
            return state;
    }
};

export default reducer;