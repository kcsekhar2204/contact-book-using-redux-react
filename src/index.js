import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "./contactReducer";
import App from "./App";
import { ToastContainer } from "react-toastify";


const store = createStore(contactReducer, composeWithDevTools());


if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    
      <App />
      <ToastContainer />
    
  </Provider>,
  rootElement
);
