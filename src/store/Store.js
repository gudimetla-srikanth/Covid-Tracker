import { createStore,combineReducers } from "redux";
import { ContactReducer } from "./ContactReducer";
import { CurrentReducer } from "./CurrentReducer";
const store=createStore(combineReducers({
    contactr:ContactReducer,
    currentr:CurrentReducer
}));
export default store;