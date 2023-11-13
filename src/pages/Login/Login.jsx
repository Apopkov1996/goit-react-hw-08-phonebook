import React from 'react';
import logincss from './login.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/operations';
import {
  selectError,
  selectIsLoggedIn,
  selectName,
} from 'redux/auth/selectors';

export const Login = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  const { register, handleSubmit } = useForm();
  const submit = data => {
    dispatch(loginThunk(data));
  };
  if (isLoggedIn) {
    toast.success(`Hello ${name}`);
    return <Navigate to="/" />;
  }
  return (
    <div className={logincss.main_wrapper}>
      <form className={logincss.form} onSubmit={handleSubmit(submit)}>
        <input
          className={logincss.input}
          placeholder="Enter the email"
          {...register('email', { required: true, minLength: 6 })}
        />
        <input
          className={logincss.input}
          placeholder="Enter the password"
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />

        <button className={logincss.btn}>LOGIN</button>
        <p className={logincss.text}>
          You don't have account? <Link to="/register">Lets Create it!</Link>
        </p>
      </form>
      {error && toast.error(error)}
    </div>
  );
};
