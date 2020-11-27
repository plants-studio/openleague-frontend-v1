import React from 'react';
import style from './NavigatorArea.module.scss';
import { NavButton, Icon } from 'plants-ui';

interface IProps {
  isLeftNavigatorMode: boolean;
}

const NavigatorArea = ({ isLeftNavigatorMode }: IProps) => {
  return (
    <>
      {isLeftNavigatorMode ? (
        <div className={style.verticalMode}>
          <NavButton width="100%" isSelected={true}>
            <Icon icon="gameController" />
            매거진
          </NavButton>
          <NavButton width="100%">
            <Icon icon="trophy" />
            오픈리그
          </NavButton>
          <NavButton width="100%">
            <Icon icon="community" />
            커뮤니티
          </NavButton>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default NavigatorArea;
