import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./components/App.jsx";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
