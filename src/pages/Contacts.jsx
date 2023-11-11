import React from 'react';
import appcss from '../components/App/app.module.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  return (
    <div className={appcss.main_wrapper}>
      <h1 className={appcss.header}> PhoneBook</h1>
      <ContactForm />
      <h2 className={appcss.header}>Contacts </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
