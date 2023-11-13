import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import regcss from './register.module.css';

import { toast } from 'react-toastify';

import { registerThunk } from 'redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .catch(e => toast.error('The email or password is incorrect'));
  };
  return (
    <div className={regcss.main_wrapper}>
      <form className={regcss.form} onSubmit={handleSubmit(submit)}>
        <input
          className={regcss.input}
          placeholder="Enter the name"
          {...register('name', { required: true, minLength: 5 })}
        />
        <input
          className={regcss.input}
          placeholder="Enter the email"
          {...register('email', { required: true, minLength: 6 })}
        />
        <input
          className={regcss.input}
          placeholder="Enter the password"
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />

        <button className={regcss.btn}>Register</button>
        <span className={regcss.text}>
          You already have account?
          <Link to="/login">Lets login!</Link>
        </span>
      </form>
    </div>
  );
};
