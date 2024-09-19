import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contact");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    console.log(id);
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleFilterChange={handleFilterChange} value={filter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
