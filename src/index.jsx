import React from "react";
import { createRoot } from "react-dom/client";
import ContactApps from "./components/ContactApp";

// css style
import "./styles/style.css"

const root = createRoot(document.getElementById('root'));

root.render(<ContactApps />);
