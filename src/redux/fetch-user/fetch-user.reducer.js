import fetchUserTypes from "./fetch-user.types";

const INITIAL_STATE = {
    isPending: null,
    error: null,
    fetchedUser: null
};

const fetchUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case fetchUserTypes.FETCH_USER_PENDING:
            return {
                ...state,
                isPending: true
            };
        case fetchUserTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                isPending: false,
                error: action.payload  
            };
        case fetchUserTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                isPending: false,
                fetchedUser: action.payload
            };
        case fetchUserTypes.RESET_USER:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default fetchUserReducer;