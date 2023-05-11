import { SyntheticEvent } from 'react';
import { ElementTypeTitles } from '../../enums/element_type_titles';

interface AuthItemTypes {
  label: string;
  type: ElementTypeTitles;
  name: string;
  placeholder: string;
  onClick?: (e?: SyntheticEvent, setter?: Function) => void;
}

export enum AuthStateKeys {
  Login = 'login',
  Register = 'register',
  Restore = 'restore',
}

type AuthStateTypes = {
  [key in AuthStateKeys]?: AuthItemTypes[];
};

export const handleAuthState = (authtype: AuthStateKeys, setter: Function) => {
  const AuthState: AuthStateTypes[] = [
    {
      login: [
        {
          label: 'Логин',
          type: ElementTypeTitles.Email,
          name: 'login',
          placeholder: 'телефон или почту',
        },
        {
          label: 'Пароль',
          type: ElementTypeTitles.Password,
          name: 'login',
          placeholder: 'пароль',
        },
        {
          label: 'Забыли пароль ?',
          type: ElementTypeTitles.Span,
          name: '',
          placeholder: '',
        },
        {
          label: 'Войти',
          type: ElementTypeTitles.Submit,
          name: '',
          placeholder: '',
        },
        {
          label: 'Создать аккаунт',
          type: ElementTypeTitles.Button,
          name: '',
          placeholder: '',
          onClick: (e) => {
            e && e.preventDefault();
            setter && setter('register');
          },
        },
      ],
    },
    {
      register: [
        {
          label: 'Логин',
          type: ElementTypeTitles.Email,
          name: 'login',
          placeholder: 'телефон или почту',
        },
        {
          label: 'Имя',
          type: ElementTypeTitles.Email,
          name: 'login',
          placeholder: 'имя пользователя',
        },
        {
          label: 'Пароль',
          type: ElementTypeTitles.Password,
          name: 'password',
          placeholder: 'пароль',
        },
        {
          label: 'Повтарите пароль',
          type: ElementTypeTitles.Password,
          name: 'reapetpassword',
          placeholder: 'повторите пароль',
        },
        {
          label: 'Зарегистрироваться',
          type: ElementTypeTitles.Button,
          name: '',
          placeholder: '',
        },
      ],
    },
    {
      restore: [
        {
          label: 'Логин',
          type: ElementTypeTitles.Email,
          name: 'login',
          placeholder: 'телефон или почту',
        },
        {
          label: 'Пароль',
          type: ElementTypeTitles.Password,
          name: 'login',
          placeholder: 'пароль',
        },
        {
          label: 'Забыли пароль ?',
          type: ElementTypeTitles.Span,
          name: '',
          placeholder: '',
        },
        {
          label: 'Войти',
          type: ElementTypeTitles.Submit,
          name: '',
          placeholder: '',
        },
        {
          label: 'Зарегистрироваться',
          type: ElementTypeTitles.Button,
          name: '',
          placeholder: '',
          // onClick: (e, setter) => {
          //   e && e.preventDefault();
          //   setter && setter('register');
          // },
        },
      ],
    },
  ];
  const needData = AuthState.find((data) => data[authtype]);
  if (needData) {
    return needData[authtype];
  }
};
