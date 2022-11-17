import React from 'react';
import PropTypes from 'prop-types';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookButton,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmitData }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const data = { name, number };
  //   onSubmitData(data);
  //   reset();
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const data = { name, number };
    onSubmitData(data);
    form.reset();
  };

  return (
    <PhonebookForm onSubmit={handleSubmit}>
      <PhonebookLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </PhonebookLabel>
      <PhonebookLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </PhonebookLabel>
      <PhonebookButton type="submit">Add Contact</PhonebookButton>
    </PhonebookForm>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
