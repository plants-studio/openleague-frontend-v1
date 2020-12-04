import React from 'react';
import style from './CardGroup.module.scss';

interface IProps {
  children: React.ReactNode;
}

const CardGroup = ({ children }: IProps) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default CardGroup;
