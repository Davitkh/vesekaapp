import { FormEvent, SyntheticEvent } from "react";
import { ElementTypeTitles } from "../../enums/element_type_titles";
import { LoginFormState } from "../../types/loginformstate";

interface AuthItemTypes {
  label: string;
  type: ElementTypeTitles;
  name: string;
  placeholder: string;
  onClick?: (e?: SyntheticEvent) => void;
  onChange?: (e?: FormEvent<HTMLInputElement>) => void;
}

export enum AuthStateKeys {
  Login = "login",
  Register = "register",
  Restore = "restore",
}

type AuthStateTypes = {
  [key in AuthStateKeys]?: AuthItemTypes[];
};
interface AuthStateProps {
  authType: AuthStateKeys;
  setAuthType: Function;
  setLoginFormState: Function;
  loginFormState: LoginFormState;
}
export const handleAuthState = (props: AuthStateProps) => {
  const { setAuthType, authType, loginFormState, setLoginFormState } = props;
  const AuthState: AuthStateTypes[] = [
    {
      login: [
        {
          label: "Логин",
          type: ElementTypeTitles.Email,
          name: "login",
          placeholder: "телефон или почту",
          onChange: (e) =>
            setLoginFormState &&
            setLoginFormState({
              ...loginFormState,
              email: e?.currentTarget.value,
            }),
        },
        {
          label: "Пароль",
          type: ElementTypeTitles.Password,
          name: "password",
          placeholder: "пароль",
          onChange: (e) =>
            setLoginFormState &&
            setLoginFormState({
              ...loginFormState,
              password: e?.currentTarget.value,
            }),
        },
        {
          label: "Забыли пароль ?",
          type: ElementTypeTitles.Span,
          name: "",
          placeholder: "",
        },
        {
          label: "Войти",
          type: ElementTypeTitles.Submit,
          name: "",
          placeholder: "",
        },
        {
          label: "Создать аккаунт",
          type: ElementTypeTitles.Button,
          name: "",
          placeholder: "",
          onClick: (e) => {
            e && e.preventDefault();
            setAuthType && setAuthType("register");
          },
        },
      ],
    },
    {
      register: [
        {
          label: "Логин",
          type: ElementTypeTitles.Email,
          name: "login",
          placeholder: "телефон или почту",
        },
        {
          label: "Имя",
          type: ElementTypeTitles.Email,
          name: "login",
          placeholder: "имя пользователя",
        },
        {
          label: "Пароль",
          type: ElementTypeTitles.Password,
          name: "password",
          placeholder: "пароль",
        },
        {
          label: "Повтарите пароль",
          type: ElementTypeTitles.Password,
          name: "reapetpassword",
          placeholder: "повторите пароль",
        },
        {
          label: "Зарегистрироваться",
          type: ElementTypeTitles.Button,
          name: "",
          placeholder: "",
        },
      ],
    },
    {
      restore: [
        {
          label: "Логин",
          type: ElementTypeTitles.Email,
          name: "login",
          placeholder: "телефон или почту",
        },
        {
          label: "Пароль",
          type: ElementTypeTitles.Password,
          name: "login",
          placeholder: "пароль",
        },
        {
          label: "Забыли пароль ?",
          type: ElementTypeTitles.Span,
          name: "",
          placeholder: "",
        },
        {
          label: "Войти",
          type: ElementTypeTitles.Submit,
          name: "",
          placeholder: "",
        },
        {
          label: "Зарегистрироваться",
          type: ElementTypeTitles.Button,
          name: "",
          placeholder: "",
          // onClick: (e, setter) => {
          //   e && e.preventDefault();
          //   setter && setter('register');
          // },
        },
      ],
    },
  ];
  const needData = AuthState.find((data) => data[authType]);
  if (needData) {
    return needData[authType];
  }
};
