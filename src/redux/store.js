import {createStore, applyMiddleware} from "redux";

// Middlewares
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";

// Root Reducer
import rootReducer from "./root-reducer";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;