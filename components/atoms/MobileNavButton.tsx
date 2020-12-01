import React from 'react';
import { Icon } from 'plants-ui';
import style from './MobileNavButton.module.scss';

// TODO icon의 select 타입을 라이브러리로부터 뽑아 사용할수 있게 하기
interface IProps {
  isSelected: boolean;
  children: string;
  icon:
    | 'community'
    | 'trophy'
    | 'gameController'
    | 'vialSolid'
    | 'Home'
    | 'DiscordSolid';
}

const MobileNavButton = ({ isSelected, children, icon }: IProps) => {
  return (
    <div
      className={style.buttonWrapper}
      style={{ color: isSelected ? '#f23c4c' : '#bdc6d8' }}
    >
      <Icon icon={icon} size="1.625rem" />
      <span className={style.text}>{children}</span>
    </div>
  );
};

export default MobileNavButton;
