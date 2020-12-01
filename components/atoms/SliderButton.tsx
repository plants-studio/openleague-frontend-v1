import React from 'react';
import style from './SliderButton.module.scss';

interface IProps {
  onClick?: (e) => void;
}

const SliderButton = ({ onClick }: IProps) => {
  return <div className={style.buttondiv} onClick={onClick}></div>;
};

export default SliderButton;
