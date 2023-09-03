import { useEffect } from 'react';
import cls from 'classnames';
import styles from './auth.module.css';
import { Textinput } from '../../../ui-kit/input/textinput';
import { Button } from '../../../ui-kit/button/button/button';

export const Auth = () => {
  useEffect(() => {
    document.title = 'Auth';
  });
  return (
    <div className={cls(styles.auth_)}>
      <div className={cls(styles.authform)}>
        <form className={cls()}>
          <h2 className={cls(styles.authform_title)}>Login</h2>
          <Textinput onChange={() => {}} placeholder={'email'} />
          <Textinput onChange={() => {}} placeholder={'password'} />
          <Button buttonTitle="Login" />
        </form>
        <div className={cls(styles.authform_actions)}>
          <span>Forgot password?</span>
          {/* <span onClick={}>Sign Up</span> */}
        </div>
      </div>
    </div>
  );
};
