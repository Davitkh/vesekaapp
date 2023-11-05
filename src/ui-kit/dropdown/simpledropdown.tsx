import { FC } from 'react';
import cls from 'classnames';
import styles from './simpledropdown.module.css';
import { IUser } from '../../types';

interface ISimpleDropDown {
  className?: string;
  user?: IUser | null;
  onClick: () => void;
}

export const SimpleDropDown: FC<ISimpleDropDown> = ({
  className,
  user,
  onClick,
}) => {
  return (
    <ul className={cls(className, styles.simpledropdown)}>
      <li>{`${user?.firstName} ${user?.lastName}`}</li>
      <li onClick={onClick}>Log out</li>
    </ul>
  );
};
