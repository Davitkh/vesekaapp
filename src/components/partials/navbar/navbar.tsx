import cls from 'classnames';
import styles from './navbar.module.css';
import './navbar.module.css';
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { Icon } from '../../../ui-kit/icons/icon';
import { useActions } from '../../../hooks/actions';
import { SimpleDropDown } from '../../../ui-kit/dropdown/simpledropdown';

export const Navbar = () => {
  const { openLogOutWindow, handleLogOut } = useActions();

  const { user } = useAppSelector((state) => state.signIn);
  const { isLogOutWindowOpen } = useAppSelector((state) => state.toggle);

  return (
    <nav className={cls(styles.navbar_)}>
      <div className={cls(styles.navbar_logo)}>
        <span>Veselka</span>
      </div>

      <div className={cls(styles.navbar_items, 'top_navbar_items')}>
        {user ? (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/maps">Maps</NavLink>

            <Icon
              className={cls(styles.navbar_items_usericon, {
                [styles.navbar_items_usericon_active]: isLogOutWindowOpen,
              })}
              icon="fa-solid fa-user"
              onClick={() =>
                openLogOutWindow(isLogOutWindowOpen ? false : true)
              }
            />
          </>
        ) : (
          <>
            <NavLink to="auth/signin">Sign In</NavLink>
            <NavLink to="auth/signup">Sign Up</NavLink>
          </>
        )}
        {isLogOutWindowOpen && (
          <SimpleDropDown
            className={cls(styles.navbar_items_logoutwindow)}
            user={user}
            onClick={() => {
              openLogOutWindow(false);
              handleLogOut();
            }}
          />
        )}
      </div>
    </nav>
  );
};
