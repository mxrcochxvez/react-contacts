import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact])
        return contacts;
    }

    const removeContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
        return contacts;
    }

    const value = { contacts, addContact, removeContact };

    return(
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    )
}