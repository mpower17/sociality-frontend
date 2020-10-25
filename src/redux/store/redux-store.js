import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {dialogsReducer} from "../reducers/dialogsReducer";
import {profileReducer} from "../reducers/profileReducer";
import {usersReducer} from "../reducers/usersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

// extension for watching store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancer(
    applyMiddleware(thunk)
);

const store = createStore(reducers, middleware);

export default store;
