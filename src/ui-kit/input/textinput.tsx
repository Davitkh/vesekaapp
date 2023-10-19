import { FC } from "react";
import styles from "./textinput.module.css";
import cls from "classnames";
import { getclasses } from "./utils/getclasses";

interface TextinputProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  id?: string;
  labaltitle?: string;
  placeholder?: string;
  value?: string;
  classNames?: string | string[];
  type?: string;
  name?: string;
}

export const Textinput: FC<TextinputProps> = (props) => {
  const {
    onChange,
    id,
    labaltitle,
    placeholder,
    value,
    classNames,
    type,
    name,
  } = props;
  const classes = getclasses(styles, classNames);
  return (
    <div className={cls(styles.textinput, classes)}>
      <label htmlFor={id}>{labaltitle || ""}</label>
      <input
        value={value}
        id={id}
        type={type || "text"}
        onChange={onChange}
        placeholder={placeholder || ""}
        name={name}
      />
    </div>
  );
};
