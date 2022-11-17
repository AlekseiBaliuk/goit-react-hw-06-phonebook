import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact, setFilter } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts.`);
    }
    dispatch(addContact(contact));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmitData={formSubmitHandler} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} />
    </Container>
  );
};
