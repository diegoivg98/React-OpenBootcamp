import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import App from "./App";
import AppReduxSaga from "./AppReduxSaga";
import "./index.css";
import { createAppAsyncStore, createAppStore } from "./store/config/storeConfig";

// let appStore = createAppStore()
let appAsyncStore = createAppAsyncStore()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      {/* <App /> */}
      <AppReduxSaga/>
    </React.StrictMode>
  </Provider>
);
