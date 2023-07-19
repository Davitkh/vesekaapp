// import { FormEvent, SyntheticEvent } from 'react';
// import { ElementTypeTitles } from '../../enums/element_type_titles';
// import { LoginFormState, RegisterFormState } from '../../types/loginformstate';

// interface AuthItemTypes {
//   label: string;
//   type: ElementTypeTitles;
//   name: string;
//   placeholder: string;
//   onClick?: (e?: SyntheticEvent) => void;
//   onChange?: (e?: FormEvent<HTMLInputElement>) => void;
// }

export enum AuthStateKeys {
  Login = 'login',
  Register = 'register',
  Restore = 'restore',
}

// type AuthStateTypes = {
//   [key in AuthStateKeys]?: AuthItemTypes[];
// };
// interface AuthStateProps {
//   authType: AuthStateKeys;
//   setAuthType: Function;
//   setLoginFormState: Function;
//   loginFormState: LoginFormState;
//   login: () => void;
//   setRegisterFormState: Function;
//   registerFormState: RegisterFormState;
// }
