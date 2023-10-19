import { Route, Routes } from 'react-router-dom';
import styles from './content.module.css';
import cls from 'classnames';
import { Home } from '../../pages/home/home';
import { Maps } from '../../pages/maps/maps';
import { Users } from '../../pages/users/users';
import { Details } from '../../pages/users/details/details';
import { SignIn } from '../../pages/auth/signin';
import { SignUp } from '../../pages/auth/signup';

export const Content = () => {
  return (
    <div className={cls(styles.content_)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/details" element={<Details />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
