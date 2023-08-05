import { FC } from "react";
import styles from "./textinput.module.css";
import cls from "classnames";

interface TextinputProps {
  onChange: () => void;
  id?: string;
  labaltitle?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  type?: string;
}

export const Textinput: FC<TextinputProps> = (props) => {
  const { onChange, id, labaltitle, placeholder, value, className, type } =
    props;
  return (
    <div className={cls(styles.textinput, className)}>
      <label htmlFor={id}>{labaltitle || ""}</label>
      <input
        value={value}
        id={id}
        type={type || "text"}
        onChange={onChange}
        placeholder={placeholder || ""}
      />
    </div>
  );
};
