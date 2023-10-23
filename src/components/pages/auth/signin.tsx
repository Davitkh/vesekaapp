import { FormEvent, useEffect, useState } from 'react';
import cls from 'classnames';
import styles from './auth.module.css';
import { Textinput } from '../../../ui-kit/input/textinput';
import { Button } from '../../../ui-kit/button/button/button';
import { useSignInMutation } from '../../../store/api/auth_api';

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

  const pickLoginData = (event: FormEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const [signIn, { isLoading, data }] = useSignInMutation();
  const handleSignIn = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    signIn(loginData).then((res) => console.log('res', res));
  };

  return (
    <div className={cls(styles.auth_)}>
      <div className={cls(styles.authform)}>
        <form className={cls()} onSubmit={(event) => handleSignIn(event)}>
          <h2 className={cls(styles.authform_title)}>Sign in</h2>
          <Textinput
            name={'email'}
            onChange={(event) => pickLoginData(event)}
            placeholder={'email'}
            value={loginData.email}
          />
          <Textinput
            name={'password'}
            onChange={(event) => pickLoginData(event)}
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
