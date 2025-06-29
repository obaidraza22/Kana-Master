import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { KanaProvider } from "./Context/KanaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <KanaProvider>
    <App />
  </KanaProvider>
);
