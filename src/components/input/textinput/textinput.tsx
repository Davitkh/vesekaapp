import { FC, FormEvent } from 'react';
import cls from 'classnames';
import styles from './textinput.module.css';
import { v4 as uuidv4 } from 'uuid';

interface TextInputProps {
  onChange?: (val: string) => void;
  inputType?: string;
  inputId?: string;
  placeholder?: string;
  customClass?: string;
  label?: string;
}

export const TextInput: FC<TextInputProps> = (props) => {
  const { onChange, inputType, inputId, placeholder, customClass, label } =
    props;

  const handleonchange = (e: FormEvent<HTMLInputElement>) => {
    onChange && onChange(e.currentTarget.value);
  };
  return (
    <div
      className={cls(styles[customClass || ''], styles.textinput)}
      id={inputId || uuidv4()}
    >
      <label htmlFor="">{label}</label>
      <input
        type={inputType || 'text'}
        onChange={handleonchange}
        placeholder={placeholder || ''}
      />
    </div>
  );
};
