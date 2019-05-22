import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import middlewareLogger from "./middleware/middleware-logger";
import { thunkMiddleware, thunk } from "redux-thunk";

const store = createStore(
  rootReducer
  //applyMiddleware(thunkMiddleware)
  // applyMiddleware(middlewareLogger),
  // thunkMiddleware
);

//console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-app-root")
);
