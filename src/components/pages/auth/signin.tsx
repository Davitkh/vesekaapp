import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from 'classnames';
import styles from './auth.module.css';
import { Textinput } from '../../../ui-kit/input/textinput';
import { Button } from '../../../ui-kit/button/button/button';
import { useSignInMutation } from '../../../store/api/auth_api';
import { useActions } from '../../../hooks/actions';
import { IError } from '../../../types/error';

interface ILoginData {
  email: string;
  password: string;
}

export const SignIn = () => {
  useEffect(() => {
    document.title = 'Auth';
  });

  const [loginData, setLoginData] = useState<ILoginData>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const pickLoginData = (e: FormEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const [signIn] = useSignInMutation();
  const { handleSignIn } = useActions();

  const SignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signIn(loginData)
        .unwrap()
        .then((payload) => handleSignIn(payload))
        .then(() => navigate('/'));
    } catch (err) {
      const {
        data: { error },
      } = err as IError;
      console.log('error', error);
    }
  };

  return (
    <div className={cls(styles.auth_)}>
      <div className={cls(styles.authform)}>
        <form className={cls()} onSubmit={(e) => SignIn(e)}>
          <h2 className={cls(styles.authform_title)}>Sign in</h2>
          <Textinput
            name={'email'}
            onChange={(e) => pickLoginData(e)}
            placeholder={'email'}
            value={loginData.email}
          />
          <Textinput
            name={'password'}
            onChange={(e) => pickLoginData(e)}
            placeholder={'password'}
            value={loginData.password}
          />
          <Button
            buttonTitle="Sign in"
            disabled={!(loginData.email && loginData.password)}
          />
        </form>
        <div className={cls(styles.authform_actions)}>
          <span>Forgot password?</span>
        </div>
      </div>
    </div>
  );
};
