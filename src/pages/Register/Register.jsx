import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerThunk } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';

export const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const error = useSelector(selectError);
  const navigate = useNavigate();

  const submit = data => {
    dispatch(registerThunk(data));
    navigate('/');
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

        <button>Register</button>
        <span>
          You already have account?
          <Link to="/login">Lets login!</Link>
        </span>
      </form>
      {error && toast.error(error)}
    </div>
  );
};
