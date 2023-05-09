import React, { useEffect } from 'react';
import { AppTitles } from '../../enums/app_titles';
import styles from './auth.module.css';

export const Auth = () => {
  useEffect(() => {
    document.title = AppTitles.Login;
  }, []);

  return (
    <div className={styles.auth}>
      <form className={styles.authform}>
        <h1 className={styles.formtitle}>Войти</h1>
        <div className={styles.inputwrapper}>
          <label htmlFor="login" className={styles.inputlabel}>
            Логин
          </label>
          <input type="email" name="login" placeholder="телефон или почту" />
        </div>
        <div className={styles.inputwrapper}>
          <label htmlFor="password" className={styles.inputlabel}>
            Пароль
          </label>
          <input type="text" name="password" placeholder="пароль" />
        </div>
        <div className={styles.forgotpassword}>
          <span>Забыли пароль ?</span>
        </div>
        <div className={styles.buttonwrapper}>
          <button type="submit">Войти</button>
        </div>
        <div className={styles.buttonwrapper}>
          <button type="button">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};
