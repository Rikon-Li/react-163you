import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./pages/common/ErrorBoundary/ErrorBoundary";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.querySelector("#root")
);
