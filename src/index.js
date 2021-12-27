import React from "react";
import ReactDOM from "react-dom";
import "./assets/font/Roboto/font.css";
import "./assets/css/bootstrap.css";
import "./index.css";
import "./app.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./assets/css/primereact-override.css";

import ErrorBoundary from "./components/errorboundary";

// redux
import { store } from "./library/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
