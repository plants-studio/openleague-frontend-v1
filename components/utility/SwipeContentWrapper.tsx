import React from 'react';
import style from './SwipeContentWrapper.module.scss';

interface IProps {
  children: React.ReactNode;
}

const SwipeContentWrapper = ({ children }: IProps) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default SwipeContentWrapper;
