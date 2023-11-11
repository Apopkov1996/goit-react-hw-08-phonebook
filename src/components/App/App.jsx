import { Contacts } from 'pages/Contacts';
import appcss from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';

export const App = () => {
  return (
    <div className={appcss.wrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

        <Route path="*" element={<Home />}>
          {' '}
        </Route>
      </Routes>
    </div>
  );
};
