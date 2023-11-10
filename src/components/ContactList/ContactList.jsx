import React, { useEffect } from 'react';
import listcss from './contactlist.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

import { deleteContactsThunk, fetchDataThunk } from 'redux/operations';
import { Loading } from 'components/Loading/Loading';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  const deleteContact = (id, name) => {
    dispatch(deleteContactsThunk(id));
    toast.info(`Contact ${name} was deleted`);
  };

  return (
    <div className={listcss.div}>
      {error && toast.error(error)}
      {loading && <Loading />}
      {!contacts.length && !loading && !error && (
        <p>You don't have any contacts. Please add contact.</p>
      )}
      {filterContacts.length ? (
        <ul className={listcss.list}>
          {filterContacts.map(({ id, name, phone }) => (
            <li key={id} className={listcss.item}>
              {name}: {phone}
              <button
                className={listcss.btn}
                onClick={() => deleteContact(id, name)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      {filter.trim().length > 0 && !filterContacts.length && (
        <p>We couldn't find any contacts matching your request.</p>
      )}
    </div>
  );
};
