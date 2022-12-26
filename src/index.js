// react libraries
import React from "react";
import { createRoot } from "react-dom/client";

// compnents
import App from "./App";

// styles
import './index.css'

// render component
const root = createRoot(document.getElementById("main-app"));
root.render(<App />);
  