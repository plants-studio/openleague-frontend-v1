import React from 'react';
import style from './CardRowLayout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const CardRowLayout = ({ children }: IProps) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default CardRowLayout;
