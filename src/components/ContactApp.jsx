import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";

function ContactApps(){
    const contacts = getData();

    return (
        <div className="contact-app">
            <h1>Contact App</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactApps;