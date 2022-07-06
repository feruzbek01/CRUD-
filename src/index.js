import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./Root";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Root />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
