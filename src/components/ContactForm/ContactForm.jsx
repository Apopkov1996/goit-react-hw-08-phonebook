import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formcss from './contactform.module.css';

import { selectContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/operations';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      toast.info(`${name} is already in contacts. `);
      return;
    }

    dispatch(addContactThunk({ name, number }));

    toast.success(`You added contact ${name}`);

    setName('');
    setNumber('');
  };

  return (
    <form className={formcss.form} onSubmit={handleSubmit}>
      <label className={formcss.label}>
        <p className={formcss.text}>Name:</p>
        <input
          className={formcss.input}
          placeholder="Enter the name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={formcss.label}>
        <p className={formcss.text}>Number:</p>
        <input
          className={formcss.input}
          placeholder="Enter the phone"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" className={formcss.btn}>
        Add Contact
      </button>
    </form>
  );
};
