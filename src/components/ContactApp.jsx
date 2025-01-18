import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";

function ContactApps() {
	return (
		<div className="contact-app">
			<header className="contact-app__header">
				<h1>Contact App</h1>
				<Navigation />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/add" element={<AddPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default ContactApps;
