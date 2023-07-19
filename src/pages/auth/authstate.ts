import { SyntheticEvent } from 'react';
import { ElementTypeTitles } from '../../enums/element_type_titles';
// import { FormEvent, SyntheticEvent } from 'react';
// import { ElementTypeTitles } from '../../enums/element_type_titles';
// import { LoginFormState, RegisterFormState } from '../../types/loginformstate';

interface LoginTypes {
  label: string;
  type: ElementTypeTitles;
  name: string;
  placeholder: string;
  onClick?: (e: SyntheticEvent) => void;
}

export enum AuthStateKeys {
  Login = 'login',
  Register = 'register',
  Restore = 'restore',
}

export const LoginState = (setter: Function): LoginStateType[] => [
  {
    login: {
      label: 'Логин',
      type: ElementTypeTitles.Email,
      name: 'login',
      placeholder: 'телефон или почту',
    },
  },
  {
    login: {
      label: 'Пароль',
      type: ElementTypeTitles.Password,
      name: 'login',
      placeholder: 'пароль',
    },
  },
  {
    login: {
      label: 'Забыли пароль ?',
      type: ElementTypeTitles.Span,
      name: '',
      placeholder: '',
    },
  },
  {
    login: {
      label: 'Войти',
      type: ElementTypeTitles.Submit,
      name: '',
      placeholder: '',
    },
  },
  {
    login: {
      label: 'Зарегистрироваться',
      type: ElementTypeTitles.Button,
      name: '',
      placeholder: '',
      onClick: (e) => {
        e.preventDefault();
        setter('register');
      },
    },
  },
];
