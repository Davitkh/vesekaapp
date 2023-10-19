import { FC } from "react";
import cls from "classnames";
import styles from "./button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  buttonTitle?: string;
  onClick?: () => {};
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = (props) => {
  const { type, buttonTitle, onClick, disabled } = props;
  return (
    <div
      className={cls(styles.button_, { [styles.button_disabled]: disabled })}
    >
      <button type={type || "submit"} onClick={onClick} disabled={disabled}>
        {buttonTitle}
      </button>
    </div>
  );
};
