import React from 'react';
import style from './CardWrapper.module.scss';

interface IProps {
  children: React.ReactNode;
  flexGrow?: number;
  desktopWidth?: string;
}

// TODO inline style 이 성능에 미치는 영향 확인하기
const CardWrapper = ({ children, flexGrow, desktopWidth }: IProps) => {
  return (
    <div
      className={style.wrapper}
      style={{ flexGrow: flexGrow, width: desktopWidth }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
