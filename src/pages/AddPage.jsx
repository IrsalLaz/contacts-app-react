import React from "react";
import ContactInput from "../components/ContactInput";
import { addContact } from "../utils/api";
import { useNavigate } from "react-router-dom";

function AddPage() {
	const navigate = useNavigate();

	async function onAddContactHandler(contact) {
		console.log(contact);
		await addContact(contact);
		navigate("/");
	}

	return (
		<section>
			<h2>Tambah Kontak</h2>

			<ContactInput addContact={onAddContactHandler} />
		</section>
	);
}

export default AddPage;
