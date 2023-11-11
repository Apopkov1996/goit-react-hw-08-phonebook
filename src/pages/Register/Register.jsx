import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submit = data => {
    dispatch(registerThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="Enter the name"
          {...register('name', { required: true, minLength: 5 })}
        />
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
          You already have account?
          <Link to="/login">Lets login!</Link>
        </span>
      </form>
    </div>
  );
};
