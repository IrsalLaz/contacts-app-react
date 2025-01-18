import React from "react";
import { createRoot } from "react-dom/client";
import ContactApps from "./components/ContactApp";
import { BrowserRouter } from "react-router-dom";

// css style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ContactApps />
	</BrowserRouter>
);
