import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot from React 18
import "./index.css";
import "./styles.css";
import 'axios'
import 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
