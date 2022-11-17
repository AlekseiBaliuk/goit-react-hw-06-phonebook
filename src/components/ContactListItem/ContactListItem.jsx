import React from 'react';
import PropTypes from 'prop-types';
import { ContactListButton, ContactListLi } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactListLi>
      {`${name}: ${number}`}
      <ContactListButton
        type="button"
        id={id}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ContactListButton>
    </ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
