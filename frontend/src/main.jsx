import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
