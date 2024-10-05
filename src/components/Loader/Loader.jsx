import css from './Loader.module.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.loader__overlay}>
        <CircularProgress className={css.loading} size="50px" />
      </div>
    </div>
  );
}
