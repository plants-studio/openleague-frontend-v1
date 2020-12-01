import React from 'react';
import style from './TextInput.module.scss';

interface IProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e) => void;
  width?: string;
}

const TextInput = ({ type, placeholder, name, onChange, width }: IProps) => {
  return (
    <input
      name={name}
      className={style.input}
      type={type}
      placeholder={placeholder}
      style={{ width: width }}
      onChange={onChange}
    ></input>
  );
};

export default TextInput;
