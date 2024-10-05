import 'modern-normalize';
import css from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import Loader from '../Loader/Loader';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import Error from '../Error/Error';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <section className={css.section}>
        <div className={css.container}>
          <h1 className={css.title}>Phonebook</h1>
          <div className={css.content}>
            {isLoading && <Loader />}
            {isError && <Error />}
            <ContactForm />
            <SearchBox />
          </div>
          <ContactList />
        </div>
      </section>
    </div>
  );
}
