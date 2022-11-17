import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import React from 'react';
import PropTypes from 'prop-types';
import { ContactListUl } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactListUl>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
