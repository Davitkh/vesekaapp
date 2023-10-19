import cls from 'classnames';
import styles from './navbar.module.css';
import './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { Textinput } from '../../../ui-kit/input/textinput';
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const isNeedToSearch = location.pathname === '/users';
  const searchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    // setValue(e.currentTarget.value);
  };
  return (
    <nav className={cls(styles.navbar_)}>
      <div className={cls(styles.navbar_logo)}>
        <span>Veselka</span>
      </div>

      <div className={cls(styles.navbar_items, 'top_navbar_items')}>
        {isNeedToSearch && (
          <Textinput
            onChange={searchHandler}
            placeholder="search"
            classNames={['p-0', 'w-auto']}
          />
        )}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/maps">Maps</NavLink>
        <NavLink to="auth/signin">Sign In</NavLink>
        <NavLink to="auth/signup">Sign Up</NavLink>
      </div>
    </nav>
  );
};
