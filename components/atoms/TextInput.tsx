import React from 'react';

interface IProps {
  type: string;
  placeholder?: string;
}

const TextInput = ({ type, placeholder }: IProps) => {
  return <input type={type} placeholder={placeholder}></input>;
};

export default TextInput;
