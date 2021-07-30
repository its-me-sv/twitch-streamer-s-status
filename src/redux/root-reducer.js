import {combineReducers} from "redux";

// Reducers
import searchFieldReducer from "./search-field/search-field.reducer";
import defaultServersReducer from "./default-servers/default-servers.reducer";
import fetchUserReducer from "./fetch-user/fetch-user.reducer";

const rootReducer = combineReducers({
    searchField: searchFieldReducer,
    defaultServers: defaultServersReducer,
    fetchUser: fetchUserReducer
});

export default rootReducer;