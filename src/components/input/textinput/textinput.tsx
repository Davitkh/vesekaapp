import { FC, FormEvent } from "react";
import cls from "classnames";
import style from "./textinput.module.css";
import { v4 as uuidv4 } from "uuid";

interface TextInputProps {
  onChange?: (val: string) => void;
  inputType?: string;
  inputId?: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = (props) => {
  const { onChange, inputType, inputId, placeholder } = props;

  const handleonchange = (e: FormEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value);
  };
  return (
    <div className={cls(style.textinput)} id={inputId || uuidv4()}>
      <input
        type={inputType || "text"}
        onChange={handleonchange}
        placeholder={placeholder || ""}
      />
    </div>
  );
};
