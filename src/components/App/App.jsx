import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import appcss from './app.module.css';

export const App = () => {
  return (
    <div className={appcss.wrapper}>
      <div className={appcss.main_wrapper}>
        {/* <img src="../../images/phone.png" alt="sad" /> */}
        <h1 className={appcss.header}> PhoneBook</h1>
        <ContactForm />
        <h2 className={appcss.header}>Contacts </h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
