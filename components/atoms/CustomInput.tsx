import React from 'react';
import style from './CustomInput.module.scss';

interface IProps {
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  width?: string;
  maxLength?: number;
  margin?: string;
  value?: string | number;
}

const CustomInput = ({
  type,
  placeholder,
  name,
  onChange,
  onKeyPress,
  width,
  maxLength,
  margin,
  value,
}: IProps) => {
  return (
    <input
      name={name}
      className={style.input}
      type={type}
      placeholder={placeholder}
      style={{ width: width, margin: margin }}
      onChange={onChange}
      maxLength={maxLength}
      onKeyPress={onKeyPress}
      value={value}
    ></input>
  );
};

export default CustomInput;
