import { createStore, applyMiddleware, compose } from "../../_snowpack/pkg/redux.js";
import thunk from "../../_snowpack/pkg/redux-thunk.js";
import reducers from "./reducers/index.js";
import { composeWithDevTools } from "../../_snowpack/pkg/redux-devtools-extension.js";


const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
  // applyMiddleware(thunk)
);


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Redux Store
// export const store = createStore(reducer, {}, composeEnhancers(
//   applyMiddleware(thunk.withExtraArgument())
// ))

export default store;