import React from 'react';
import style from './RadioInput.module.scss';

interface IProps {
  name: string;
  value: string;
  children: string;
  onChange?: (e) => void;
  nowSelected: string;
}

// TODO 클릭의 범위가 텍스트에만 국한됨
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
