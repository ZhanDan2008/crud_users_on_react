import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Contexts from "./Contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Contexts>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Contexts>
);
