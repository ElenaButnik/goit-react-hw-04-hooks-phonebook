import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Forms/Form";
import ContactList from "./components/Contacts/ContactList";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",

  const addNewContact = (name, number) => {
    const newContacts = {
      name,
      number,
      id: uuidv4(),
    };
    if (!contacts.find((contact) => contact.name === name)) {
      setContacts((prevContacts) => [newContacts, ...prevContacts]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const renderContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = (e) => {
    setContacts(contacts.filter((elem) => elem.id !== e.target.id));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList contacts={renderContacts()} removeContact={removeContact} />
    </div>
  );
}

export default App;
