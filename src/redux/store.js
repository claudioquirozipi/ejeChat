import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// const initialState = {};
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  // compose(
  //   applyMiddleware(...middleware),
  //   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
  composeWithDevTools(
    /* logger must be the last middleware in chain to log actions */
    applyMiddleware(thunk)
  )
);

export default store;
