import { FC } from "react";
import cls from "classnames";
import styles from "./button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  buttonTitle?: string;
  onClick?: () => {};
}
export const Button: FC<ButtonProps> = (props) => {
  const { type, buttonTitle, onClick } = props;
  return (
    <div className={cls(styles.button_)}>
      <button type={type || "submit"} onClick={onClick}>
        {buttonTitle}
      </button>
    </div>
  );
};
