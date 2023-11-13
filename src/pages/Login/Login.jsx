import React from 'react';
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
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="Enter the email"
          {...register('email', { required: true, minLength: 6 })}
        />
        <input
          placeholder="Enter the password"
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />

        <button>LOGIN</button>
        <span>
          You dont have account? <Link to="/register">Lets Create it!</Link>
        </span>
      </form>
      {error && toast.error(error)}
    </div>
  );
};
