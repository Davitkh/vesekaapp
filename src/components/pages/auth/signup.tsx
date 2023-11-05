import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from 'classnames';
import styles from './auth.module.css';
import { Textinput } from '../../../ui-kit/input/textinput';
import { Button } from '../../../ui-kit/button/button/button';
import { useSignUpMutation } from '../../../store/api/auth_api';
import { IError } from '../../../types/error';

export const SignUp = () => {
  useEffect(() => {
    document.title = 'Auth';
  });
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const pickRegisterData = (e: FormEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e?.currentTarget?.name]: e.currentTarget.value,
    });
  };

  const [signUp] = useSignUpMutation();

  const SignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signUp(registerData)
        .unwrap()
        .then((payload) => console.log('User signed up succesfully'))
        .then(() => navigate('/auth/signin'));
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
        <form onSubmit={(e) => SignUp(e)}>
          <h2 className={cls(styles.authform_title)}>Sign up</h2>
          <Textinput
            name={'email'}
            onChange={(e) => pickRegisterData(e)}
            placeholder={'email'}
            value={registerData.email}
          />
          <Textinput
            name={'firstName'}
            onChange={(e) => pickRegisterData(e)}
            placeholder={'first name'}
            value={registerData.firstName}
          />
          <Textinput
            name={'lastName'}
            onChange={(e) => pickRegisterData(e)}
            placeholder={'last name'}
            value={registerData.lastName}
          />
          <Textinput
            name={'password'}
            onChange={(e) => pickRegisterData(e)}
            placeholder={'password'}
            value={registerData.password}
          />
          <Button buttonTitle="Sign up" />
        </form>
      </div>
    </div>
  );
};
