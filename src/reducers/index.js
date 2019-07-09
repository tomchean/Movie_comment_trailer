import { combineReducers } from "redux";
import home from "./homeReducer";
import movie from "./movieReducer";
import user from "./userReducer"
// Set up both reducer with combine method
const rootReducer = combineReducers({
    home,
    movie,
    user
});

export default rootReducer;
