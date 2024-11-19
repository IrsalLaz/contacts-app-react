import React from "react";
import { createRoot } from "react-dom/client";
import ContactApps from "./ContactApp";

// css style
import "./style.css"

const root = createRoot(document.getElementById('root'));

root.render(<ContactApps />);
