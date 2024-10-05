import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filtersSlice';

export default function ContactList() {
  const filterSelector = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts__list}>
      {filterSelector.map(contact => (
        <li className={css.contacts__list_item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
