import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import appcss from './app.module.css';

import { Contacts } from 'pages/Contacts';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Loader } from 'components/MainLoader/Loader';

import { PublicRoute } from 'hoc/PublicRoute';
import { PrivateRoute } from 'hoc/PrivateRoute';
import { refreshThunk } from 'redux/auth/operations';
import { selectRefresh } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <div className={appcss.wrapper}>
      {refresh ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            ></Route>
          </Route>

          <Route path="*" element={<Home />}>
            {' '}
          </Route>
        </Routes>
      )}
    </div>
  );
};
