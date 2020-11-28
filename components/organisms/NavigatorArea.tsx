import React from 'react';
import style from './NavigatorArea.module.scss';
import { NavButton, Icon } from 'plants-ui';
import { useRouter } from 'next/router';

interface IProps {
  isLeftNavigatorMode: boolean;
}

const NavigatorArea = ({ isLeftNavigatorMode }: IProps) => {
  const router = useRouter();
  return (
    <>
      {isLeftNavigatorMode ? (
        <div className={style.verticalMode}>
          <NavButton
            width="100%"
            isSelected={router.pathname === '/'}
            onClick={() => {
              router.push('/');
            }}
          >
            <Icon icon="trophy" />
            오픈리그
          </NavButton>
          <NavButton
            width="100%"
            isSelected={router.pathname === '/community'}
            onClick={() => {
              router.push('/community');
            }}
          >
            <Icon icon="community" />
            커뮤니티
          </NavButton>
          <NavButton
            width="100%"
            isSelected={router.pathname === '/home'}
            onClick={() => {
              router.push('/home');
            }}
          >
            <Icon icon="Home" />홈
          </NavButton>
        </div>
      ) : (
        <div>모바일 뷰 준비중입니다!</div>
      )}
    </>
  );
};

export default NavigatorArea;
