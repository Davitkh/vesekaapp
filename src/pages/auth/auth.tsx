import styles from './auth.module.css';
import cls from 'classnames';
import { Login } from './login';

export const Auth = () => {
  // switch() {

  // }
  return (
    <div className={cls(styles.auth)}>
      <Login />
    </div>
  );
};
