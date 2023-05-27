import styles from './NavbarIcon.module.css';
import { useHistory } from 'react-router-dom';
export const NavbarIcon = () => {
  const history = useHistory();
  return (
    <div className={styles.navbaricon} onClick={() => history.push('/')}>
      <div className={styles.navbaricon_left}></div>
      <div className={styles.navbaricon_middle}></div>
      <div className={styles.navbaricon_right}></div>
    </div>
  );
};
