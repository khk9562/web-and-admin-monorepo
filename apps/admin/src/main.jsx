// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import "@monorepo-test-turbo/shared/styles/main.scss";
// import "@coreui/coreui/dist/css/coreui.min.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "core-js";

import App from "./App.jsx";
import store from "./store";

import "./index.css";
import "@monorepo-test-turbo/shared/styles/main.scss";
import "@coreui/coreui/dist/css/coreui.min.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
