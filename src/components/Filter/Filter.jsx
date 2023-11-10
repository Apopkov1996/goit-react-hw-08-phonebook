import React from 'react';

import filcss from './filter.module.css';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    return dispatch(setFilter(e.target.value));
  };
  return (
    <label className={filcss.label}>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
