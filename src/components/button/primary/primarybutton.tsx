import { FC } from 'react';
import cls from 'classnames';
import styles from './primarybutton.module.css';
import { customclasshandler } from '../../../helpers/customclass_handler';

interface PrimaryButtonProps {
  title?: string;
  customClass?: string | string[];
}

export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { title, customClass } = props;
  const customCls = customclasshandler(styles, customClass);
  console.log('customCls', customCls);

  return (
    <div className={cls(customCls, styles.primarybutton)}>
      <button>{title || 'Кнопка'}</button>
    </div>
  );
};
