import React from 'react';
import style from './NavigatorArea.module.scss';
import { NavButton, Icon } from 'plants-ui';
import { useRouter } from 'next/router';
import MobileNavButton from './../atoms/MobileNavButton';

interface IProps {
  isLeftNavigatorMode: boolean;
}

const NavigatorArea = ({ isLeftNavigatorMode }: IProps) => {
  const router = useRouter();
  return (
    <>
      {isLeftNavigatorMode ? (
        <div className={style.verticalmode}>
          <NavButton
            width="100%"
            isSelected={
              router.pathname === '/' ||
              router.pathname.split('/')[1] === 'openleague'
            }
            onClick={() => {
              router.push('/');
            }}
          >
            <Icon icon="trophy" />
            오픈리그
          </NavButton>
          <NavButton
            width="100%"
            isSelected={router.pathname.split('/')[1] === 'community'}
            onClick={() => {
              router.push('/community');
            }}
          >
            <Icon icon="community" />
            커뮤니티
          </NavButton>
          <NavButton
            width="100%"
            isSelected={router.pathname.split('/')[1] === 'home'}
            onClick={() => {
              router.push('/home');
            }}
          >
            <Icon icon="Home" />홈
          </NavButton>
        </div>
      ) : (
        <div className={style.rowmode}>
          <MobileNavButton icon="trophy" isSelected={true}>
            오픈리그
          </MobileNavButton>
          <MobileNavButton icon="community" isSelected={false}>
            커뮤니티
          </MobileNavButton>
          <MobileNavButton icon="Home" isSelected={false}>
            홈
          </MobileNavButton>
        </div>
      )}
    </>
  );
};

export default NavigatorArea;
