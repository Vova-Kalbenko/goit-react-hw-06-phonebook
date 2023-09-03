import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contacts/contacts-slice';
import css from './Form.module.css'

export default function Form () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  // console.log(dispatch)
  const contacts = useSelector((state) => state.contacts);
  // console.log(contacts)

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === '' && number === '') {
      alert('all fields must be fill in');
      return;
    }

    if (name === 'name') {
      setName(value);
      return
    } else if (name === 'number') {
      setNumber(value);
      return
    }
    return
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactExist = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExist) {
      alert(`User with name ${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
    resetForm ();
  };

  const resetForm  = () => {
    setName('');
    setNumber('');
  };


    return (
      <div>
        <h3>Phonebook</h3>
        <form onSubmit={handleSubmit} className={css.form}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              // id={nameInputId}
              name="name"
              className={css.nameInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={number}
              onChange={handleInputChange}
              // id={numberInputId}
              name="number"
              className={css.numberInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">
          add contact
        </button>
        </form>
      </div>
    );
  }

Form.propTypes = {
  contactsName: PropTypes.arrayOf(PropTypes.string.isRequired),
};





