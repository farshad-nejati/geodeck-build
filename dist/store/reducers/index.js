import { combineReducers } from "../../../_snowpack/pkg/redux.js";
import authReducer from "./authReducer.js";

export default combineReducers({
    auth: authReducer
});


