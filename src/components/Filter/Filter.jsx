import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import filcss from './filter.module.css';

import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    return dispatch(setFilter(e.target.value));
  };
  return (
    <label className={filcss.label}>
      <p className={filcss.text}>Find contacts by name</p>
      <input
        placeholder="Search contact"
        className={filcss.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
