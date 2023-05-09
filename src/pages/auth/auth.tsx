import { useEffect, useState } from "react";
import { AppTitles } from "../../enums/app_titles";
import styles from "./auth.module.css";
import { LoginState } from "./authstate";
import { ElementTypeTitles } from "../../enums/element_type_titles";

export const Auth = () => {
  useEffect(() => {
    document.title = AppTitles.Login;
  }, []);
  const [authType, setAuthType] = useState("login");

  switch (authType) {
    case "login":
      return (
        <div className={styles.auth}>
          <form className={styles.authform}>
            <h1 className={styles.formtitle}>Войти</h1>
            {LoginState(setAuthType).map((item) => {
              if (
                item.login.type === ElementTypeTitles.Submit ||
                item.login.type === ElementTypeTitles.Button
              ) {
                return (
                  <div
                    className={styles.buttonwrapper}
                    key={JSON.stringify(item.login)}
                  >
                    <button type={item.login.type} onClick={item.login.onClick}>
                      {item.login.label}
                    </button>
                  </div>
                );
              } else if (item.login.type === ElementTypeTitles.Span) {
                return (
                  <div
                    className={styles.forgotpassword}
                    key={JSON.stringify(item.login)}
                  >
                    <span>{item.login.label}</span>
                  </div>
                );
              }
              return (
                <div
                  className={styles.inputwrapper}
                  key={JSON.stringify(item.login)}
                >
                  <label
                    htmlFor={item.login.name}
                    className={styles.inputlabel}
                  >
                    {item.login.label}
                  </label>
                  <input
                    type={item.login.type}
                    name={item.login.name}
                    placeholder={item.login.placeholder}
                    autoComplete={"autoComplete"}
                  />
                </div>
              );
            })}
          </form>
        </div>
      );
    case "register":
      return (
        <div className={styles.auth}>
          <form className={styles.authform}>
            <h1 className={styles.formtitle}>Зарегистрироваться</h1>
            {LoginState(setAuthType).map((item) => {
              if (
                item.login.type === ElementTypeTitles.Submit ||
                item.login.type === ElementTypeTitles.Button
              ) {
                return (
                  <div
                    className={styles.buttonwrapper}
                    key={JSON.stringify(item.login)}
                  >
                    <button type={item.login.type} onClick={item.login.onClick}>
                      {item.login.label}
                    </button>
                  </div>
                );
              } else if (item.login.type === ElementTypeTitles.Span) {
                return (
                  <div
                    className={styles.forgotpassword}
                    key={JSON.stringify(item.login)}
                  >
                    <span>{item.login.label}</span>
                  </div>
                );
              }
              return (
                <div
                  className={styles.inputwrapper}
                  key={JSON.stringify(item.login)}
                >
                  <label
                    htmlFor={item.login.name}
                    className={styles.inputlabel}
                  >
                    {item.login.label}
                  </label>
                  <input
                    type={item.login.type}
                    name={item.login.name}
                    placeholder={item.login.placeholder}
                    autoComplete={"autoComplete"}
                  />
                </div>
              );
            })}
          </form>
        </div>
      );
    default:
      return <></>;
  }
};
