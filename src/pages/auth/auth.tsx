import { useEffect } from 'react';
import { AppTitles } from '../../enums/app_titles';
import styles from './auth.module.css';
// import { ElementTypeTitles } from '../../enums/element_type_titles';
// import { LoginFormState, RegisterFormState } from '../../types/loginformstate';
// import { gql, useMutation } from '@apollo/client';
// import { AUTH_TOKEN } from '../../constants/constants';
import { AuthStateKeys } from './authstate';
import { TextInput } from '../../components/input/textinput/textinput';
import { PrimaryButton } from '../../components/button/primary/primarybutton';

export const Auth = () => {
  useEffect(() => {
    document.title = AppTitles.Login;
  }, []);
  // const [authType, setAuthType] = useState<AuthStateKeys>();

  // const [loginFormState, setLoginFormState] = useState<LoginFormState>({
  //   email: '',
  //   password: '',
  // });
  // const [registerFormState, setRegisterFormState] = useState<RegisterFormState>(
  //   {
  //     name: '',
  //     email: '',
  //     password: '',
  //   }
  // );

  // const [login] = useMutation(LOGIN_MUTATION, {
  //   variables: {
  //     email: loginFormState.email,
  //     password: loginFormState.password,
  //   },
  //   onCompleted: ({ login }) => {
  //     localStorage.setItem(AUTH_TOKEN, login.token);
  //   },
  // });

  switch (AuthStateKeys.Login) {
    case AuthStateKeys.Login:
      return (
        <div className={styles.auth}>
          <form className={styles.authform}>
            <h1 className={styles.formtitle}>Войти</h1>
            <TextInput placeholder="Логин" customClass="auth_inp_mb_24" />
            <TextInput placeholder="Логин" />
            <PrimaryButton title="Войти" customClass="auth_inp_mt_24" />
            <PrimaryButton
              title="Зарегистрироваться"
              customClass={['auth_inp_mt_24', 'accept']}
            />
          </form>
        </div>
      );
    // case AuthStateKeys.Register:
    //   return (
    //     <div className={styles.auth}>
    //       <form className={styles.authform}>
    //         <h1 className={styles.formtitle}>Зарегистрироваться</h1>
    //       </form>
    //     </div>
    //   );
    // case AuthStateKeys.Restore:
    //   return <>Test 1</>;
    default:
      return <>Restore</>;
  }
};
