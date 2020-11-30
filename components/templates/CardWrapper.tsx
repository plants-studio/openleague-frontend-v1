import React from 'react';
import style from './CardWrapper.module.scss';

interface IProps {
  children: React.ReactNode;
  flexGrow?: number;
}

const CardWrapper = ({ children, flexGrow }: IProps) => {
  return (
    <div className={style.wrapper} style={{ flexGrow: flexGrow }}>
      {children}
    </div>
  );
};

export default CardWrapper;
