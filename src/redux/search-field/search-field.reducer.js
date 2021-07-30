import searchFieldTypes from "./search-field.types";

const INITIAL_STATE = {
    searchFieldText: ""
};

const searchFieldReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case searchFieldTypes.ON_SEARCH_CHANGE: 
            return {
                ...state,
                searchFieldText: action.payload
            };
        default:
            return state;
    }
};

export default searchFieldReducer;