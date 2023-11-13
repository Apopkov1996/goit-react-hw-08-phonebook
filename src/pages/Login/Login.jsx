import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logincss from './login.module.css';

import { toast } from 'react-toastify';

import { loginThunk } from 'redux/auth/operations';
import { selectName } from 'redux/auth/selectors';

export const Login = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  console.log(name);

  const { register, handleSubmit } = useForm();

  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => toast.success(`Hello ${res.user.name}`))
      .catch(e => toast.error('The email or password is incorrect'));
  };

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
    </div>
  );
};
