import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, selectFilters } from '../../redux/filtersSlice';

export default function SearchBox() {
  const id = useId();
  const filterSelector = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleFilter = event => {
    return dispatch(filterContacts(event.target.value));
  };
  return (
    <div className={css.search}>
      <label htmlFor={`${id}-search`} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        className={css.input}
        id={`${id}-search`}
        value={filterSelector}
        onChange={handleFilter}
      />
    </div>
  );
}
