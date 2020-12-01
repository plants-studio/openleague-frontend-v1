import React from 'react';
import style from './TextInput.module.scss';

interface IProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e) => void;
  width?: string;
  maxLength?: number;
}

const TextInput = ({
  type,
  placeholder,
  name,
  onChange,
  width,
  maxLength,
}: IProps) => {
  return (
    <input
      name={name}
      className={style.input}
      type={type}
      placeholder={placeholder}
      style={{ width: width }}
      onChange={onChange}
      maxLength={maxLength}
    ></input>
  );
};

export default TextInput;
