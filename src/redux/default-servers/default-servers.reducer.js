import defaultServersTypes from "./default-servers.types";
import processData from "./default-servers.utils";


const INITIAL_STATE = {
    isPending: null,
    error: null,
    serversData: null
};


const defaultServersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case defaultServersTypes.DEFAULT_SERVERS_PENDING:
            return {...state, isPending: true};
        case defaultServersTypes.DEFAULT_SERVERS_FAILURE:
            return {...state, isPending:false, error:action.payload};
        case defaultServersTypes.DEFAULT_SERVERS_SUCCESS:
            return {
                ...state, 
                isPending: false, 
                serversData: processData(action.payload)
            };
        default:
            return state;
    }
};

export default defaultServersReducer;