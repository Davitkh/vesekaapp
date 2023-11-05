import { FC } from 'react';

interface IUserIcon {
  className?: string;
  icon?: string;
  onClick?: () => void;
}
export const Icon: FC<IUserIcon> = ({ className, icon, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <i className={icon}></i>
    </div>
  );
};
