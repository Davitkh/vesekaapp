import styles from './NavbarIcon.module.css';

export const NavbarIcon = () => {
  return (
    <div className={styles.navbaricon}>
      <div className={styles.navbaricon_left}></div>
      <div className={styles.navbaricon_middle}></div>
      <div className={styles.navbaricon_right}></div>
    </div>
  );
};
