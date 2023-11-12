import {combineReducers, createStore} from "redux";
import {navigateReducer} from "./navigationReducer";


const rootReducer = combineReducers({
    navigate:navigateReducer,
})
export const store = createStore(rootReducer)