import css from './Error.module.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Error() {
  return (
    <div className={css.error}>
      <Alert severity="error" className={css.error__alert}>
        <AlertTitle>Error</AlertTitle>
        An error has occurred. Please try again later.
      </Alert>
    </div>
  );
}
