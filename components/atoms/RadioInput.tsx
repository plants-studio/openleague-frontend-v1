import React from 'react';
import style from './RadioInput.module.scss';

interface IProps {
  name: string;
  value: string;
  children: string;
  onChange?: (e) => void;
  nowSelected: string;
}

const RadioInput = ({
  name,
  children,
  value,
  nowSelected,
  onChange,
}: IProps) => {
  return (
    <div
      className={style.wrapper}
      style={
        nowSelected === value
          ? { backgroundColor: '#f23c4c', color: 'white' }
          : {}
      }
    >
      <label className={style.labelText}>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          className={style.input}
        />
        {children}
      </label>
    </div>
  );
};

export default RadioInput;
