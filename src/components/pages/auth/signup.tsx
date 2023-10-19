import { useEffect } from 'react';
import cls from 'classnames';
import styles from './auth.module.css';
import { Textinput } from '../../../ui-kit/input/textinput';
import { Button } from '../../../ui-kit/button/button/button';

export const SignUp = () => {
  useEffect(() => {
    document.title = 'Auth';
  });
  return (
    <div className={cls(styles.auth_)}>
      <div className={cls(styles.authform)}>
        <form className={cls()}>
          <h2 className={cls(styles.authform_title)}>Sign up</h2>
          <Textinput onChange={() => {}} placeholder={'name'} />
          <Textinput onChange={() => {}} placeholder={'last name'} />
          <Textinput onChange={() => {}} placeholder={'email'} />
          <Textinput onChange={() => {}} placeholder={'password'} />
          <Textinput onChange={() => {}} placeholder={'reapeat password'} />
          <Button buttonTitle="Sign up" />
        </form>
      </div>
    </div>
  );
};
